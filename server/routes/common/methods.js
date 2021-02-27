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
function POST(router, url, handler) { router.post(url, handleAndRespond(handler)); }
function GET(router, url, handler) { router.get(url, handleAndRespond(handler)); }
function PUT(router, url, handler) { router.get(url, handleAndRespond(handler)); }
function DELETE(router, url, handler) { router.delete(url, handleAndRespond(handler)); }

function POST_FORM(router, url, upload, handler) { router.post(url, upload, handler); }
function GET_FORM(router, url, upload, handler) { router.get(url, upload, handler); }
function PUT_FORM(router, url, upload, handler) { router.get(url, upload, handler); }
function DELETE_FORM(router, url, upload, handler) { router.delete(url, upload, handler); }

module.exports = { GET, POST, PUT, DELETE, POST_FORM, GET_FORM, PUT_FORM, DELETE_FORM };
