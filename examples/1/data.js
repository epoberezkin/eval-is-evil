exports.source = {
  services: {
    db: {
      host: 'db.example.com'
    },
    audit: {
      host: 'audit.example.com'
    }
  }
};


exports.result = {
  db: 'db.example.com',
  audit: 'audit.example.com'
};


exports.transformation = {
  db: '/services/db/host',
  audit: '/services/audit/host'
};
