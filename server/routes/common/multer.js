const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
const assets = require('../../config/assets.json');

const pdfFileFilter = (req, file, cb) => { cb(null, file.mimetype === 'application/pdf'); };
const imgFileFilter = (req, file, cb) => { cb(null, file.mimetype.startsWith('image/')); };

const checkPath = (s) => {
  let stat = null;
  try { stat = fs.statSync(s); }
  catch (err) { fs.mkdirSync(s); }
  if (stat && !stat.isDirectory()) { throw new Error('Directory cannot be created - ' + s); }
};

const initStorage = (s) => {
  checkPath(s);
  return {
    destination: (req, file, cb) => { cb(null, s); },
    filename: (req, file, cb) => { cb(null, uuid.v4() + path.extname(file.originalname)); }
  }
};

const bannerStorage = multer.diskStorage(initStorage(assets.banner));
const pdfStorage = multer.diskStorage(initStorage(assets.pdf));
const profileStorage = multer.diskStorage(initStorage(assets.profile));
const teaserStorage = multer.diskStorage(initStorage(assets.teaser));

const uploadBanner = multer({ storage: bannerStorage, fileFilter: imgFileFilter });
const uploadPDF = multer({ storage: pdfStorage, fileFilter: pdfFileFilter });
const uploadProfile = multer({ storage: profileStorage, fileFilter: imgFileFilter });
const uploadTeaser = multer({ storage: teaserStorage, fileFilter: imgFileFilter });

module.exports = { uploadBanner, uploadPDF, uploadProfile, uploadTeaser };
