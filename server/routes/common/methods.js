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

module.exports = { GET, POST, PUT, DELETE };
