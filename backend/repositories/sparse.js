import Sparse from "../models/Sparse.js";

const getAllSparses = async () => {
    try{
        const sparses = await Sparse.find()
        return sparses
    }catch(error){
        console.log(error)
        throw error
    }
}


const createNewSparseRecord = async (
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
  ) => {
    try {
      const existingSparseRecord = await Sparse.findOne({ date });
  
      if (existingSparseRecord) {
        return "Sparse record đã tồn tại trong hệ thống.";
      }
      const student = await Sparse.create({
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
      });
      return Sparse;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

export default {getAllSparses
,createNewSparseRecord
}