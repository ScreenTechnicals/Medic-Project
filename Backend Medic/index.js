// declaring our project node packages.
// developer: Subhranshu Choudhury | subhransuchoudhury00@gmail.com
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mailer = require("nodemailer");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
require("dotenv").config();
const app = express();

// cors

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

// mongoose connect to database

mongoose.connect(`${process.env.DB_URL}`);

// express session

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
  })
);

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  name: String,
  username: String, // username : The mail ID of the user or student.
  password: String,
  isdoctor: Boolean, // doctor or patient
  experience: String,
  specialist: String,
  medical_history: String,
  age: String,
  gender: String,
  symptom: String,
  address: String,
  description: String,
  phone: String,
  messages: [
    {
      patient_name: String,
      doctor_name: String,
      patient_email: String,
      doctor_email: String,
      message: String,
      timestamp: String,
      isdoctor: Boolean,
    },
  ],
  videos: [
    {
      video_title: String,
      video_url: String,
    },
  ],
  meets: [
    {
      schedule: String,
      patient_name: String,
      meet_url: String,
      patient_phone: String,
    },
  ],
  reviews: [
    {
      comment: String,
      commenter: String,
      timestamp: String,
      stars: Number,
    },
  ],
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("user", userSchema);
// const Admin = new mongoose.model("admin", adminSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()); // for login and register the user.
passport.deserializeUser(User.deserializeUser()); // for logging out the user.

// routes
app.get("/", (req, res) => {
  res.status(200).json({ status: 200, response: "success" });
});

// register the user / student.

app.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, u) => {
      if (err) {
        console.log(err);
        res
          .status(404)
          .json({ status: 404, response: "may user already exist." });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.status(200).json({
            status: 200,
            username: req.user.username,
            response: "user created successfully.",
          });
        });
      }
    }
  );
});

// login with user credentials

app.post("/login-user", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      res.status(404).json({
        status: 404,
        response: "error in logging in the user.",
      });
    } else {
      passport.authenticate("local")(req, res, () => {
        res.status(200).json({
          status: 200,
          isAuthenticated: true,
        });
      });
    }
  });
});

app.post("/register-details", (req, res) => {
  if (true) {
    User.updateOne(
      {
        username: req.body.username, // we will get the data from the user as the user is already registered.
      },
      {
        $set: {
          name: req.body.name,
          experience: req.body.experience,
          specialist: req.body.specialist,
          phone: req.body.phone,
          isdoctor: req.body.isdoctor,
          symptom: req.body.symptom,
          age: req.body.age,
          email: req.body.email,
          description: req.body.description,
          address: req.body.address,
          age: req.body.age,
          medical_history: req.body.medical_history,
          gender: req.body.gender,

          // more filed should add
        },
      },
      (err) => {
        if (err) {
          res.status(404).json({ status: 404 });
        } else {
          res.status(200).json({
            status: 200,
            response: "user updated successfully.",
          });
        }
      }
    );
  } else {
    res.status(401).json({
      // res.redirect --> if you want to redirect the user.
      status: 401,
      response: "authentication failed.",
    });
  }
});

// chatting feature

app.post("/user-chat", (req, res) => {
  if (true) {
    const message = req.body.message;
    const doctor_name = req.body.doctor_name;
    const patient_name = req.body.patient_name;
    const patient_email = req.body.patient_email;
    const doctor_email = req.body.doctor_email;
    const isdoctor = req.body.isdoctor;
    const timestamp = req.body.timestamp;
    User.updateOne(
      { username: doctor_email },
      {
        $push: {
          messages: {
            doctor_name: doctor_name,
            patient_name: patient_name,
            patient_email: patient_email,
            doctor_email: doctor_email,
            timestamp: timestamp,
            message: message,
            isdoctor: isdoctor,
          },
        },
      },
      (err) => {
        if (err) {
          res
            .status(404)
            .json({ status: 404, response: "error in sending message." });
        } else {
          console.log("/user-chat Success");
          res
            .status(200)
            .json({ status: 200, response: "message successfully sent." });
        }
      }
    );
  } else {
    res.redirect("/login");
  }
});

app.get("/:doctor/patients", async (req, res) => {
  console.log("/doctor/patients chat");
  User.findOne({ username: req.params.doctor_email }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      const patient_name = new Set();
      user.messages.forEach((user) => {
        patient_name.add(user.patient_email);
      });
      res.send([...patient_name]);
    }
  });
});

app.get("/chat/:doctor/:patient", async (req, res) => {
  const doctor_email = req.params.doctor;
  const patient_email = req.params.patient;
  console.log("-> /chat/d/p get");

  User.findOne({ username: doctor_email }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      const filterMessage = user.messages.filter((m) => {
        return m.patient_email.includes(patient_email);
      });
      res.send(filterMessage);
    }
  });
});

// get all the users from the database.

app.get("/users", (req, res) => {
  if (true) {
    User.find((err, user) => {
      if (err) {
        res.status(500).json({
          status: 500,
          response: "error in searching users. (DB error)!",
        });
      } else {
        res.send(user);
      }
    });
  } else {
    res.status(401).json({ status: 401, response: "authentication failed." });
  }
});

// specific user

app.get("/users/:username", (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

// doctors list

app.get("/doctors", (req, res) => {
  User.find((err, user) => {
    if (err) {
      res.status(500).json({
        status: 500,
        response: "error in searching users. (DB error)!",
      });
    } else {
      const filterDoctors = user.filter((d) => {
        return d.isdoctor == true;
      });
      res.send(filterDoctors);
    }
  });
});

// patients list

app.get("/patients", (req, res) => {
  User.find((err, user) => {
    if (err) {
      res.status(500).json({
        status: 500,
        response: "error in searching users. (DB error)!",
      });
    } else {
      const filterDoctors = user.filter((d) => {
        return d.isdoctor == false;
      });
      res.send(filterDoctors);
    }
  });
});

// upload user favorite videos

app.post("/user-videos", (req, res) => {
  if (req.body.isdoctor) {
    User.updateOne(
      { username: req.body.username },
      {
        $push: {
          videos: {
            video_url: req.body.video_url,
            video_title: req.body.video_title,
          },
        },
      },
      (err) => {
        if (err) {
          res
            .status(404)
            .json({ status: 404, response: "error in posting your video." });
        } else {
          res.status(200).json({
            status: 200,
            response: "your video has been posted successfully",
          });
        }
      }
    );
  } else {
    res.status(401).json({
      status: 401,
      response: "You are not a alumni, unauthorized entry.",
    });
  }
});

app.post("/schedule-meeting", (req, res) => {
  const receiver_mail = req.body.receiver_mail;
  const sender_mail = req.body.sender_mail;
  const receiver_name = req.body.receiver_name;
  const sender = req.body.sender_name;
  const meet_url = req.body.meet_url;
  const schedule = req.body.schedule;
  const sender_phone = req.body.sender_phone;
  const subject = `MEDIC SCHEDULE MEET : ${schedule}`;
  const message = `<center><h2>MEDIC MEET</h2><br><br><b>PATIENT NAME: </b>${sender}<br><br><b>MEET URL: </b>${meet_url}<br><br><b>SCHEDULE :</b> ${schedule}<br><br><b>PATIENT PHONE: </b> ${sender_phone}<br><br><b>PATIENT MAIL: </b> ${sender_mail}</center>`;

  User.updateOne(
    { username: receiver_name },
    {
      $push: {
        meets: {
          schedule: schedule,
          patient_name: sender,
          meet_url: meet_url,
          patient_phone: sender_phone,
        },
      },
    },
    (err) => {
      if (err) {
        res
          .status(404)
          .json({ status: 404, response: "error in sending message." });
      } else {
        try {
          sendMail(receiver_mail, message, subject);
          sendMail(sender_mail, message, subject);
        } catch (error) {
          console.log(error);
        }

        res
          .status(200)
          .json({ status: 200, response: "message successfully sent." });
      }
    }
  );
});

smtpProtocol = mailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.post("/send-mail", (req, res) => {
  const Email = req.body.email; // mail id of the user.
  const Message = req.body.message;
  const Subject = req.body.subject;
  try {
    sendMail(Email, Message, Subject);
  } catch (error) {
    res.status(404).json({
      status: 404,
      response: "error in sending mail.",
    });
  }
  res.status(200).json({
    status: 200,
    response: "mail successfully sent.",
  });
});

const sendMail = (email, message, subject) => {
  // nodemailer
  let mailOption = {
    from: process.env.MAIL_USER,
    to: email,
    subject: subject,
    html: message,
  };
  smtpProtocol.sendMail(mailOption, function (err, response) {
    if (err) {
      console.log(err);
      return 404;
    }
    console.log("Message Sent.");
    return 200;
  });
  smtpProtocol.close();
};

// Other requests .. Kindly Ignore

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server active on PORT ${PORT}`);
});
