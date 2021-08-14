const axios = require("axios");

const { Api, TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { NewMessage } = require("telegram/events");

const apiId = 7444397;
const apiHash = "4383298978b7f1c5c4d91b084c700e38";
const stringSession = new StringSession(
  "1BVtsOLQBuyGi-h9i1q1unB-AO6fdVjpSG5FD1WGE4E13A8jhtuDjljKruMcgsvGWNf1IHtx-BeFxjVsogyuuOXTzoOPxxkdV00D6IF-zcNHOUzbU_qQ9g_7QmwCWZ5e56ty6KPO2zfJBB06WswV8G-GjhMbyLxLIVDkKRvcmtNrZ1HqZdKTpLDwVFd8pMnDM4b3QHarYjvIkGm8yccqiLGWoOK0w0EQi0bozOLv9XO6wENCDKr-5z-ekOSMouOc4eRY08T9rKadqUvk1jOV5Qit5VhzzSPKUtxvWyFt0OtPNEWBwNLi-rukYv10Gk71hqVXFexsPPsvf3TY5GTli30u2TGu-Txw="
); // fill this later with the value from session.save()

forward_config = {
    '👑johnny' : {cid: 1295969078, active: true},
    '🚀trades' : {cid: 1506696037, active: true},
    '💨woods' : {cid: 1535952240, active: true},
    '🎯eli' : {cid: 1232766699, active: true},
    '🧿astekz' : {cid: 1307525437, active: true},
    '🌟rising-stars' :  {cid: 1582835705, active: true},
    '🐯tahervag' :  {cid: 1587863461, active: true}
}

const  eventPrint = (client) => async (event) => {
    const message = event.message;
    // console.log("🚀 ~ file: index.js ~ line 24 ~ eventPrint ~ message.peerId?.channelId", message.peerId?.channelId)
    if (message.peerId?.channelId === 1209521283) {
        const walsh_channel = message.message.split('\n', 1)[0];
        // console.log("🚀 ~ file: index.js ~ line 23 ~ eventPrint ~ walsh_channel", walsh_channel.substring(0))
        if(typeof forward_config[walsh_channel.substring(0)] !== 'undefined' && forward_config[walsh_channel.substring(0)].active){
            await client.sendMessage(new Api.PeerChannel({ channelId: forward_config[walsh_channel.substring(0)].cid }),{
                message: message.message
            });
        }
    }
}

(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  client.addEventHandler(eventPrint(client), new NewMessage({}));
  await client.start({
    onError: (err) => console.log(err),
  });
})();