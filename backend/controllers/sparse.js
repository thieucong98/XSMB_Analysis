import { sparseRepository } from "../repositories/index.js";

const getAllSparses = async (req, res) => {
    try {
        const sparses = await sparseRepository.getAllSparses();
        res.status(200).json({
            message: "Success",
            data: sparses
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}

// Dem so ngay lo chua ra va ngay cuoi cung no ra
const countAllSparses = async (req, res) => {
    try {
        const sparses = await sparseRepository.getAllSparses();
        const array = Object.values(sparses)
        var countSparseArray = []
        for (var i = 0; i < 20; i++) {
            var sparse = { id: 0, count: 0, lastDate: new Date("2023-10-04T00:00:00.000Z") }
            countSparseArray.push(sparse)
        }
        const superCount = (index, number, date) => {
            countSparseArray[index].id = index
            countSparseArray[index].count = countLastSparse(number, countSparseArray[index].count)
            countSparseArray[index].lastDate = countLastDate(number, date, countSparseArray[index].count, countSparseArray[index].lastDate)
        }
        // Lap tat ca cac ban ghi trong database        
        for (var i = 0; i < array.length; i++) {
            superCount(0, array[i].num0, array[i].date)
            superCount(1, array[i].num1, array[i].date)
            superCount(2, array[i].num2, array[i].date)
            superCount(3, array[i].num3, array[i].date)
            superCount(4, array[i].num4, array[i].date)
            superCount(5, array[i].num5, array[i].date)
            superCount(6, array[i].num6, array[i].date)
            superCount(7, array[i].num7, array[i].date)
            superCount(8, array[i].num8, array[i].date)
            superCount(9, array[i].num9, array[i].date)
            superCount(10, array[i].num10, array[i].date)
            superCount(11, array[i].num11, array[i].date)
            superCount(12, array[i].num12, array[i].date)
            superCount(13, array[i].num13, array[i].date)
            superCount(14, array[i].num14, array[i].date)
            superCount(15, array[i].num15, array[i].date)
            superCount(16, array[i].num16, array[i].date)
            superCount(17, array[i].num17, array[i].date)
            superCount(18, array[i].num18, array[i].date)
            superCount(19, array[i].num19, array[i].date)
        }
        console.log(count1)
        console.log(countSparseArray);
        res.status(200).json({
            message: "Success",
            data: countSparseArray
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
}

// Dem so ngay lo chua ra
const countLastSparse = (number, count) => {
    if (number == 0) {
        count += 1
    }
    else {
        count = 0
    }
    return count
}

// Dem ngay cuoi cung lo ra
const countLastDate = (number, lastDate, count, date) => {
    if (number == 0) {
        count += 1
    }
    else {
        count = 0
    }
    if (count != 0) {
        lastDate = date
    }
    return lastDate
}

// Dem so lan lo to ra
const countSparseTime = (number, count) => {
    count = number + count
    return count
}

// tao ban ghi cho bang Sparse
const insertNewSparseRecord = async (req, res) => {
    const { date,
        num0,
        num1,
        num2,
        num3,
        num4,
        num5,
        num6,
        num7,
        num8,
        num9,
        num10,
        num11,
        num12,
        num13,
        num14,
        num15,
        num16,
        num17,
        num18,
        num19 } = req.body;
    try {
        const result = await sparseRepository.createNewSparseRecord(
            date,
            num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6,
            num7,
            num8,
            num9,
            num10,
            num11,
            num12,
            num13,
            num14,
            num15,
            num16,
            num17,
            num18,
            num19,
        );

        if (typeof result === "string") {
            res.status(400).json({
                message: result,
            });
        } else {
            res.status(200).json({
                message: "Insert student successfully",
                data: result,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            errors: err.toString(),
        });
    }
};




export default {
    getAllSparses,
    insertNewSparseRecord,
    countAllSparses
}