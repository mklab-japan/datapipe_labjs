// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
let participantID;
//参加者番号がすでにあるかどうかをチェック
if(this.state.participantID)
{
  participantID = this.state.participantID;
}
//参加者番号が生成されていない場合に生成
else
{
  //JATOS以外の場合は参加者番号をランダム生成する
  if (typeof jatos == 'undefined') {
    participantID = this.random.range(10000, 100000);
  }
  //JATOS利用時は参加者番号にJATOSのWorker IDを置き換える
  else{
    participantID = await new Promise((resolve) => {
      jatos.onLoad(() => resolve(jatos.workerId))
    })
  }
}

//作成した(または読み込んだ)参加者番号をlab.jsに読み込む
this.options.templateParameters.push({participantID: participantID})
}
      },
      "title": "Global loop",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実施します。準備ができたら，下のボタンを押してください。",
          "hint": "\u003Cbutton\u003Eフルスクリーンを許可する\u003C\u002Fbutton\u003E",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Global Sequence",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "lab.jsのデータをDataPipe経由で保存するデモです。",
                "content": ""
              },
              {
                "required": true,
                "type": "text",
                "content": "",
                "title": "準備ができた方は「次へ」を押して，開始してください。"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {
              "inst.001.png": "embedded\u002F3c3debfd0f862e2cd8b74bd5429a56760959056bfb6ba3c435ae0e1cc2442603.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Instruction"
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Briefing",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "input",
                    "label": "年齢",
                    "attributes": {
                      "type": "number",
                      "min": "18",
                      "max": "99"
                    },
                    "help": "年齢を半角数字で入力してください。",
                    "name": "age"
                  },
                  {
                    "required": false,
                    "type": "input",
                    "label": "性別",
                    "help": "性別を入力してください（回答したくない方は空欄でかまいません）。",
                    "name": "sex"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "demographic"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Main",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "radio",
                    "options": [
                      {
                        "label": "まったくあてはまらない",
                        "coding": "1"
                      },
                      {
                        "label": "あてはまらない",
                        "coding": "2"
                      },
                      {
                        "label": "どちらともいえない",
                        "coding": "3"
                      },
                      {
                        "label": "あてはまる",
                        "coding": "4"
                      },
                      {
                        "label": "非常によくあてはまる",
                        "coding": "5"
                      }
                    ],
                    "label": "わたしは猫が好きだ",
                    "name": "catLiking"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class = 'content-horizontal-center'\u003E\u003Cbutton id = \"nextBtn\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "次へ",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Questionnaire"
              }
            ]
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Deberifing",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "\u003Cspan style = \"color: tomato\"\u003E実験・調査終了です。ありがとうございました！\u003C\u002Fspan\u003E",
                    "content": ""
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cbutton\u003Eコピー\u002Fメモしたので終了する\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
//csv
//const = study.options.datastore.exportCsv(separator=', ')

//check Tardy
//ファイル名をユーザーIDにする
const filename = this.parameters.participantID

let dataJSON = study.internals.controller.datastore.exportJson();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "hnX6tg1hWIjS",
    filename: `${filename}.json`,
    data: dataJSON,
  }),
});
}
                },
                "title": "post_datapie_thanks",
                "tardy": true
              }
            ]
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()