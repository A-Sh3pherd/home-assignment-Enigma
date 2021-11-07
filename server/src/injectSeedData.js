const injectSeedData = async ( User ) => {
    const seed_users = [
        { name: "Alon", email: "asheferb@gmail.com" },
        { name: "Ross", email: "ross@gmail.com" },
        { name: "Tali", email: "tali@gmail.com" },
        { name: "Arzu", email: "arzu@gmail.com" },
        { name: "Yedidiah", email: "yedidiah@gmail.com" },
        { name: "Koko", email: "koko@gmail.com" },
        { name: "Momo", email: "momo@gmail.com" },
        { name: "Popo", email: "popo@gmail.com" },
        { name: "Toto", email: "toto@gmail.com" },
        { name: "Loko", email: "loko@gmail.com" },
        { name: "Nigmar", email: "nigmerulihashemot@gmail.com" },
    ];
    // For each user in the seed_users array, create a user.
    // If user already exists, do nothing
    await Promise.all(
        seed_users.map(async ( user ) =>
            User.findOrCreate({
                where: { name: user.name, email: user.email },
            })
        )
    );
};

module.exports = { injectSeedData };

