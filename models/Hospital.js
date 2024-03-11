import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
    {
        hospitalName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        registrationDate: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        registrationNumber: {
            type: String,
            required: true,
        },
        emergencyWardNumber: {
            type: String,
            required: true,
        },
        registrationCertificate: {
            type: String,
            required: true,
        },
        numberOfAmbulancesAvailable: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Hospital = mongoose.model("Hospital", HospitalSchema);
export default Hospital;
