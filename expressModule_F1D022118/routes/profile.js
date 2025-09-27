import express from "express";
const router = express.Router();

const profiles = [
    { id: "1", nim: "F1D022118", nama: "Excel Caesariano", umur: 22 },
    { id: "2", nim: "F1D022081", nama: "Nabila Noor Azizah", umur: 21 },
    { id: "3", nim: "F1D022120", nama: "Jane Smith", umur: 20 },
    { id: "4", nim: "F1D022130", nama: "John Doe", umur: 23 },
    { id: "5", nim: "F1D022145", nama: "Alice Johnson", umur: 22 },
    { id: "6", nim: "F1D022151", nama: "Bob Brown", umur: 24 },
    { id: "7", nim: "F1D022146", nama: "Charlie Davis", umur: 21 },
    { id: "8", nim: "F1D022117", nama: "Diana Evans", umur: 23 },
    { id: "9", nim: "F1D022012", nama: "Ethan Wilson", umur: 22 },
    { id: "10", nim: "F1D022129", nama: "Fiona Clark", umur: 24 }
];

router.get("/", (_req, res) => {
    res.json(profiles);
});

router.get("/:param", (req, res) => {
    const { param } = req.params;

    const profile = profiles.find((p) => p.id === param || p.nim === param);

    if (profile) {
        res.json(profile);
    } else {
        res.status(404).json({ message: "Profile not found" });
    }
});

export default router;