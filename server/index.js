const express = require('express');
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");



app.use(express.json());
app.use(cors());

const CLIENT_ID = '764595447847-qdh31977is9jmf9i1vrq4rh8r85q6l5f.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground/';
const REFRESH_TOKEN = '1//0474K4IaESZZuCgYIARAAGAQSNwF-L9IrSp7LtyqiaqNv_IVI05eKRyQI6ErhoFNQQX9HOIXM7d0CYyW7AeLMXAdnZfnUkCMnTH0';

const oAuth2client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post("/sendmail", async (req, res) => {
    try {
        console.log(req.body)
        const accesToken = await oAuth2client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: 'daddesignsweb.ppc@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesToken
            },
            tls: { rejectUnauthorized: false }
        });
        const mailOptions = {
            from: `Dad Designs Web <${req.body.email}>`,
            to: "daddesignsweb.ppc@gmail.com",
            subject: req.body.subject,
            text: req.body.text,
            html: `
            <h1>Dad Designs Web</h1>
            ${req.body.firstName ?
                    `<p>Full Name: ${req.body.firstName} ${req.body.lastName}</P>` :
                    `<p>Full Name: ${req.body.fullName}</P>`
                }
            <p>Contact: ${req.body.phone}</P>
            ${req.body.packageName ?
                    `<p>Package Name: ${req.body.packageName}</P>` :
                    ""
                }
            ${req.body.packagePrice ?
                    `<p>Package Price: ${req.body.packagePrice}</P>` :
                    ""
                }
            ${req.body.pageName ?
                    `<p>Page Name: ${req.body.pageName}</P>` :
                    ""
                }
                ${req.body.stars ?
                    `<p>Page Name: ${req.body.stars}</P>` :
                    ""
                }
                ${req.body.words ?
                    `<p>Page Name: ${req.body.words}</P>` :
                    ""
                }
                ${req.body.pages ?
                    `<p>Page Name: ${req.body.pages}</P>` :
                    ""
                }
                ${req.body.urgency ?
                    `<p>Page Name: ${req.body.urgency}</P>` :
                    ""
                }
                ${req.body.videoType ?
                    `<p>Page Name: ${req.body.videoType}</P>` :
                    ""
                }
                ${req.body.videoDuration ?
                    `<p>Page Name: ${req.body.videoDuration}</P>` :
                    ""
                }
            <p>Button Name: ${req.body.buttonName}</P>
            <p>Email: ${req.body.email}</P><br/>
            <p style="font-size: 20px; font-weight: 600;" >${req.body.text}</p>
            `
        }
        transport.sendMail(mailOptions);
        res.status(200).json({ msg: "the mail has been sent" });
    } catch (err) {
        res.status(501).json(err)
        console.log(err)
    }
})
const PORT = 5500;
app.listen(PORT, () => {
    console.log("the server is ready on port number:", PORT)
});