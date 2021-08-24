const { verifyToken } = require('./token');

function handleAndRespond(handler) {
  return async (req, res) => {
    try {
      const data = await handler(req);
      res.json({success: true, data});
    } catch (error) {
      res.json({success: false, error: error.message || error});
    }
  };
}

// CRUD
function POST(router, url, upload, handler) { router.post(url, upload, handleAndRespond(handler)); }
function GET(router, url, upload, handler) { router.get(url, upload, verifyToken, handleAndRespond(handler)); }
function PUT(router, url, upload, handler) { router.get(url, hupload, andleAndRespond(handler)); }
function DELETE(router, url, upload, handler) { router.delete(url, upload, handleAndRespond(handler)); }

function POST_FORM(router, url, upload, handler) { router.post(url, upload, handler); }
function GET_FORM(router, url, upload, handler) { router.get(url, upload, handler); }
function PUT_FORM(router, url, upload, handler) { router.get(url, upload, handler); }
function DELETE_FORM(router, url, upload, handler) { router.delete(url, upload, handler); }

module.exports = { GET, POST, PUT, DELETE, POST_FORM, GET_FORM, PUT_FORM, DELETE_FORM };
