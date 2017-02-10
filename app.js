const rp = require('request-promise');

const deleteInactiveFriends = (token, days) => {
  const currentDate = new Date().getTime();

  rp({ uri: `https://api.vk.com/method/friends.get?order=random&access_token=${token}&v=5.62`, json: true })
    .then(body => {
      const friends = body.response.items;

      friends.forEach((friend, i) => {
        setTimeout(() => {
          rp({ uri: `https://api.vk.com/method/messages.getHistory?user_id=${friend}&count=1&access_token=${token}&v=5.62`, json: true })
            .then(body => {
              if (body.response.count) {
                const unix = body.response.items[0].date;
                const messageDate = new Date(unix * 1000).getTime();

                // Разница между последним сообщением и сегодняшним днем
                const timeDiff = Math.abs(currentDate - messageDate);
                const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                if (diffDays > days) {
                  rp({ uri: `https://api.vk.com/method/friends.delete?user_id=${friend}&access_token=${token}`, json: true })
                    .then(body => {
                      if (body.response) {
                        console.log(`Пользователь id${friend} был удален, так как не писал ${diffDays} дней.`);
                      } else {
                        console.log('Какая-то ошибка.');

                        // console.log(body);
                      }
                    })
                    .catch(e => {
                      console.log(e);
                    });
                }
              }
            })
            .catch(e => {
              console.log(e);
            });
        }, i * 2000);
      });
    })
    .catch(e => {
      console.log(e);
    });
};

deleteInactiveFriends('b4f62ec4e26098a4efd157a155b01230cc466355277d48df2317b0597d43fa36fb0b694bc50f6496a516c', 10);