// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI.replace("test", "order_food_details_hawker_hotel"), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// // Nodemailer Transporter Configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "contactfreelancerpro@gmail.com", // Sender email
//         pass: "wxsk wfwp rzav ijdj", // Use an App Password (Not your Gmail password)
//     },
// });

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   name: String,
//   contact: String,
//   items: [{ name: String, price: String }],
//   subtotal: String,
// });

// const Order = mongoose.model('Order', orderSchema);

// // API Endpoint to Save Order and Send Email Notification
// app.post('/api/orders', async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     await newOrder.save();

//     // Construct Order Summary
//     const orderDetails = req.body.items.map(item => `${item.name} - $${item.price}`).join("\n");

//     // Email Options
//     const mailOptions = {
//         from: "contactfreelancerpro@gmail.com",
//         to: "nikhilmahato104@gmail.com",
//         subject: "New Order Received",
//         text: `You have received a new order!\n\nName: ${req.body.name}\nContact: ${req.body.contact}\n\nOrder Details:\n${orderDetails}\n\nSubtotal: $${req.body.subtotal}`,
//     };

//     // Send Email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log("Email Error:", error);
//         } else {
//             console.log("Email sent:", info.response);
//         }
//     });

//     res.status(201).json({ message: 'Order saved successfully!' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI.replace("test", "order_food_details_hawker_hotel"), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// // Nodemailer Transporter Configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "contactfreelancerpro@gmail.com", // Sender email
//         pass: "wxsk wfwp rzav ijdj", // Use an App Password (Not your Gmail password)
//     },
// });

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   name: String,
//   contact: String,
//   items: [{ name: String, price: String, image: String }], // Added image field
//   subtotal: String,
//   orderTime: { type: Date, default: Date.now }
// });

// const Order = mongoose.model('Order', orderSchema);

// // API Endpoint to Save Order and Send Email Notification
// app.post('/api/orders', async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     await newOrder.save();

//     // Generate Unique Subject with Timestamp
//     const timestamp = new Date().toLocaleString(); // Example: "2025-04-01 10:30 AM"

//     // Construct Order Summary in HTML Table Format
//     const orderDetails = req.body.items.map(item => `
//         <tr>
//             <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
//                 <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
//             </td>
//             <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
//             <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">$${item.price}</td>
//         </tr>
//     `).join("");

//     // Email Options with HTML Formatting
//     const mailOptions = {
//         from: "contactfreelancerpro@gmail.com",
//         to: "nikhilmahato104@gmail.com, nikhilmahato645@gmail.com, navneetagrawal811@gmail.com",
//         subject: `🥳 New Order Received at ${timestamp}`, // Unique subject with emoji
//         html: `
//             <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//                 <div style="max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
                    
//                     <h2 style="text-align: center; color: #333;">📢 New Order Received! 🎉</h2>
                    
//                     <p><strong>Name:</strong> ${req.body.name} 🧑‍💼</p>
//                     <p><strong>Contact:</strong> ${req.body.contact} 📞</p>

//                     <h3>🛒 Order Details:</h3>
//                     <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
//                         <tr style="background-color: #007bff; color: white;">
//                             <th style="padding: 10px; text-align: center;">Image</th>
//                             <th style="padding: 10px;">Item</th>
//                             <th style="padding: 10px; text-align: center;">Price</th>
//                         </tr>
//                         ${orderDetails}
//                     </table>

//                     <h3 style="color: #ff5733;">💰 Subtotal: $${req.body.subtotal}</h3>

//                     <p style="text-align: center; font-size: 16px;">
//                         🏢 Visit our website: <a href="https://freelancerpro.in" style="color: #007bff; text-decoration: none;">FreelancerPro.in</a>
//                     </p>
                    
//                     <p style="text-align: center; font-size: 14px; color: gray;">
//                         Need help? Contact us immediately at 
//                         <a href="mailto:support@freelancerpro.in" style="color: #007bff; text-decoration: none;">contactfreelancerpro@gmail.com</a>
//                     </p>
                    
//                     <p style="text-align: center; font-size: 12px; color: gray;">🕒 Order Placed At: ${timestamp}</p>

//                 </div>
//             </div>
//         `,
//     };

//     // Send Email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log("Email Error:", error);
//         } else {
//             console.log("Email sent:", info.response);
//         }
//     });

//     res.status(201).json({ message: 'Order saved successfully!' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI.replace("test", "order_food_details_hawker_hotel"), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// // Nodemailer Transporter Configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "contactfreelancerpro@gmail.com", // Sender email
//         pass: "wxsk wfwp rzav ijdj", // Use an App Password (Not your Gmail password)
//     },
// });

// // Order Schema (Modified to include quantity)
// const orderSchema = new mongoose.Schema({
//     name: String,
//     contact: String,
//     items: [{ name: String, price: String, image: String, quantity: Number }], // Added quantity
//     subtotal: String,
//     orderTime: { type: Date, default: Date.now }
// });

// const Order = mongoose.model('Order', orderSchema);

// // API Endpoint to Save Order and Send Email Notification (Modified)
// app.post('/api/orders', async (req, res) => {
//     try {
//         const newOrder = new Order(req.body);
//         await newOrder.save();

//         // Generate Unique Subject with Timestamp
//         const timestamp = new Date().toLocaleString();

//         // Construct Order Summary in HTML Table Format (Modified to include quantity)
//         const orderDetails = req.body.items.map(item => `
//             <tr>
//                 <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
//                     <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
//                 </td>
//                 <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
//                 <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.price} x ${item.quantity}</td>
//                 <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
//             </tr>
//         `).join("");

//         // Email Options with HTML Formatting
//         const mailOptions = {
//             from: "contactfreelancerpro@gmail.com",
//             to: "nikhilmahato104@gmail.com, nikhilmahato645@gmail.com, navneetagrawal811@gmail.com",
//             subject: `🥳 New Order Received at ${timestamp}`,
//             html: `
//                 <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//                     <div style="max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
                        
//                         <h2 style="text-align: center; color: #333;">📢 New Order Received! 🎉</h2>
                        
//                         <p><strong>Name:</strong> ${req.body.name} 🧑‍💼</p>
//                         <p><strong>Contact:</strong> ${req.body.contact} 📞</p>

//                         <h3>🛒 Order Details:</h3>
//                         <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
//                             <tr style="background-color: #007bff; color: white;">
//                                 <th style="padding: 10px; text-align: center;">Image</th>
//                                 <th style="padding: 10px;">Item</th>
//                                 <th style="padding: 10px; text-align: center;">Price</th>
//                                 <th style="padding: 10px; text-align: center;">Total</th>
//                             </tr>
//                             ${orderDetails}
//                         </table>

//                         <h3 style="color: #ff5733;">💰 Subtotal: $${req.body.subtotal}</h3>

//                         <p style="text-align: center; font-size: 16px;">
//                             🏢 Visit our website: <a href="https://freelancerpro.in" style="color: #007bff; text-decoration: none;">FreelancerPro.in</a>
//                         </p>
                        
//                         <p style="text-align: center; font-size: 14px; color: gray;">
//                             Need help? Contact us immediately at 
//                             <a href="mailto:support@freelancerpro.in" style="color: #007bff; text-decoration: none;">contactfreelancerpro@gmail.com</a>
//                         </p>
                        
//                         <p style="text-align: center; font-size: 12px; color: gray;">🕒 Order Placed At: ${timestamp}</p>

//                     </div>
//                 </div>
//             `,
//         };

//         // Send Email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log("Email Error:", error);
//             } else {
//                 console.log("Email sent:", info.response);
//             }
//         });

//         res.status(201).json({ message: 'Order saved successfully!' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI.replace("test", "order_food_details_hawker_hotel"), {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// // Nodemailer Transporter Configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: "contactfreelancerpro@gmail.com",
//         pass: "wxsk wfwp rzav ijdj",
//     },
// });

// // Order Schema
// const orderSchema = new mongoose.Schema({
//     name: String,
//     contact: String,
//     items: [{ name: String, price: String, image: String, quantity: Number }],
//     subtotal: String,
//     orderTime: { type: Date, default: Date.now }
// });

// const Order = mongoose.model('Order', orderSchema);

// // API Endpoint to Save Order and Send Email Notification
// app.post('/api/orders', async (req, res) => {
//     try {
//         const newOrder = new Order(req.body);
//         await newOrder.save();

//         const timestamp = new Date().toLocaleString();

//         const orderDetails = req.body.items.map(item => {
//             const price = parseFloat(item.price.replace("$", ""));
//             const quantity = parseInt(item.quantity, 10);

//             if (isNaN(price) || isNaN(quantity)) {
//                 return `
//                     <tr>
//                         <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
//                             <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
//                         </td>
//                         <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
//                         <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Invalid Price or Quantity</td>
//                         <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Invalid Total</td>
//                     </tr>
//                 `;
//             }

//             const total = (price * quantity).toFixed(2);

//             return `
//                 <tr>
//                     <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
//                         <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
//                     </td>
//                     <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
//                     <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">$${price} x ${quantity}</td>
//                     <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">$${total}</td>
//                 </tr>
//             `;
//         }).join("");

//         const mailOptions = {
//             from: "contactfreelancerpro@gmail.com",
//             to: "nikhilmahato104@gmail.com, nikhilmahato645@gmail.com, navneetagrawal811@gmail.com",
//             subject: `🥳 New Order Received at ${timestamp}`,
//             html: `
//                 <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
//                     <div style="max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
//                         <h2 style="text-align: center; color: #333;">📢 New Order Received! 🎉</h2>
//                         <p><strong>Name:</strong> ${req.body.name} 🧑‍💼</p>
//                         <p><strong>Contact:</strong> ${req.body.contact} 📞</p>
//                         <h3>🛒 Order Details:</h3>
//                         <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
//                             <tr style="background-color: #007bff; color: white;">
//                                 <th style="padding: 10px; text-align: center;">Image</th>
//                                 <th style="padding: 10px;">Item</th>
//                                 <th style="padding: 10px; text-align: center;">Price</th>
//                                 <th style="padding: 10px; text-align: center;">Total</th>
//                             </tr>
//                             ${orderDetails}
//                         </table>
//                         <h3 style="color: #ff5733;">💰 Subtotal: $${req.body.subtotal}</h3>
//                         <p style="text-align: center; font-size: 16px;">
//                             🏢 Visit our website: <a href="https://freelancerpro.in" style="color: #007bff; text-decoration: none;">FreelancerPro.in</a>
//                         </p>
//                         <p style="text-align: center; font-size: 14px; color: gray;">
//                             Need help? Contact us immediately at 
//                             <a href="mailto:support@freelancerpro.in" style="color: #007bff; text-decoration: none;">contactfreelancerpro@gmail.com</a>
//                         </p>
//                         <p style="text-align: center; font-size: 12px; color: gray;">🕒 Order Placed At: ${timestamp}</p>
//                     </div>
//                 </div>
//             `,
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log("Email Error:", error);
//             } else {
//                 console.log("Email sent:", info.response);
//             }
//         });

//         res.status(201).json({ message: 'Order saved successfully!' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI.replace("test", "order_food_details_hawker_hotel"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Order Schema
const orderSchema = new mongoose.Schema({
    name: String,
    contact: String,
    items: [{ name: String, price: String, image: String, quantity: Number }],
    subtotal: String,
    orderTime: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// API Endpoint to Save Order and Send Email Notification
app.post('/api/orders', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();

        const timestamp = new Date().toLocaleString();

        const orderDetails = req.body.items.map(item => {
            const price = parseFloat(item.price.replace("$", ""));
            const quantity = parseInt(item.quantity, 10);

            if (isNaN(price) || isNaN(quantity)) {
                return `
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
                        </td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Invalid Price or Quantity</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Invalid Total</td>
                    </tr>
                `;
            }

            const total = (price * quantity).toFixed(2);

            return `
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                        <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; border-radius: 5px;">
                    </td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${item.name} 🍽️</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">$${price} x ${quantity}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">$${total}</td>
                </tr>
            `;
        }).join("");

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "nikhilmahato104@gmail.com, nikhilmahato645@gmail.com, navneetagrawal811@gmail.com",
            subject: `🥳 New Order Received at ${timestamp}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                    <div style="max-width: 600px; background: white; padding: 20px; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
                        <h2 style="text-align: center; color: #333;">📢 New Order Received! 🎉</h2>
                        <p><strong>Name:</strong> ${req.body.name} 🧑‍💼</p>
                        <p><strong>Contact:</strong> ${req.body.contact} 📞</p>
                        <h3>🛒 Order Details:</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #007bff; color: white;">
                                <th style="padding: 10px; text-align: center;">Image</th>
                                <th style="padding: 10px;">Item</th>
                                <th style="padding: 10px; text-align: center;">Price</th>
                                <th style="padding: 10px; text-align: center;">Total</th>
                            </tr>
                            ${orderDetails}
                        </table>
                        <h3 style="color: #ff5733;">💰 Subtotal: $${req.body.subtotal}</h3>
                        <p style="text-align: center; font-size: 16px;">
                            🏢 Visit our website: <a href="https://freelancerpro.in" style="color: #007bff; text-decoration: none;">FreelancerPro.in</a>
                        </p>
                        <p style="text-align: center; font-size: 14px; color: gray;">
                            Need help? Contact us immediately at 
                            <a href="mailto:support@freelancerpro.in" style="color: #007bff; text-decoration: none;">contactfreelancerpro@gmail.com</a>
                        </p>
                        <p style="text-align: center; font-size: 12px; color: gray;">🕒 Order Placed At: ${timestamp}</p>
                    </div>
                </div>
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Email Error:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });

        res.status(201).json({ message: 'Order saved successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
