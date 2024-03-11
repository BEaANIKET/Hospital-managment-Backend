import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Hospital from "../models/Hospital.js";

/* REGISTER HOSPITAL */

export const register = async (req, res) => {
    try {
        const {
            hospitalName,
            email,
            password,
            address,
            city,
            state,
            pincode,
            phoneNumber,
            registrationNumber,
            emergencyWardNumber,
            registrationCertificate,
            numberOfAmbulancesAvailable,
            registrationDate,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newHospital = new Hospital({
            hospitalName,
            email,
            password: passwordHash,
            address,
            city,
            state,
            pincode,
            phoneNumber,
            registrationNumber,
            emergencyWardNumber,
            registrationCertificate,
            numberOfAmbulancesAvailable,
            registrationDate,
        });

        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
    } catch (err) {
        console.log("Registration Failed!");
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password, hospitalName, specialAccessCode } = req.body;
        const hospital = await Hospital.findOne({ email: email });
        if (!hospital)
            return res.status(400).json({ msg: "Hospital does not exist. " });

        const isMatch = await bcrypt.compare(password, hospital.password);
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: hospital._id }, process.env.JWT_SECRET);
        res.status(200).json({ token, hospital });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
