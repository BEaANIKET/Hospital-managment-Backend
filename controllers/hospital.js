import Hospital from "../models/Hospital.js";

/* READ */
export const getHospital = async (req, res) => {
    try {
        const { id } = req.params;
        const hospital = await Hospital.findById(id);
        res.status(200).json(hospital);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* READ */
export const getAllHospital = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
