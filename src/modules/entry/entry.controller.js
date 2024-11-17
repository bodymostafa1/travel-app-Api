import Entries from "../../../database/models/entries.model.js"
import fs from "fs"
async function deleteImages(id) {
   let entry = await Entries.find({ _id: id })
   let images = entry[0].images
   for (let i = 0; i < images.length; i++) {
       images[i] = images[i].slice(22)
   }
   for (let i = 0; i < images.length; i++) {
      fs.unlink(images[i], (err) => {
         console.log(err)
      })
   }
}
let addEntry = async (req, res, next) => {
   if (req.files) {
      req.body.images = req.files.map((img) => {
         return img.filename
      })
   }
   let entry = new Entries(req.body)
   await entry.save()
   res.json({ message: "user created successfully", newEntry: entry })
}
let getEntries = async (req, res, next) => {
   let allEntries = await Entries.find()
   res.json({ message: "successfull", allEntries })
}
let getEntry = async (req, res, next) => {
   let entryId = req.params.id
   let entry = await Entries.find({ _id: entryId })
   res.json({ message: "successfull", entry })
}
let deleteEntry = async (req, res, next) => {
   let entryId = req.params.id
   let entry = await Entries.findById(entryId)
   if( entry.images != undefined) deleteImages(entryId)
   let deletedEntry = await Entries.findByIdAndDelete(entryId)
   res.json({ message: "successfull", deletedEntry })
}
export {
   addEntry,
   getEntries,
   getEntry,
   deleteEntry
}