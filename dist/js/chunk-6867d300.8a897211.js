(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6867d300"],{"5a55":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n=Object(c["F"])("data-v-830a94ac");Object(c["t"])("data-v-830a94ac");var b=Object(c["h"])("h1",null,"게시판 상세보기",-1),o={class:"board_title"},l={class:"board_date"},d={class:"board_user_name"},r={class:"board_number"},i={class:"board_hit_count"},s={class:"board_content"},u={class:"btnWrap"},h={type:"button",id:"modify",class:"btn btn-primary"};Object(c["r"])();var j=n((function(t,e,a,n,j,O){return Object(c["q"])(),Object(c["d"])(c["a"],null,[b,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(j.boardData,(function(t,a){return Object(c["q"])(),Object(c["d"])("div",{class:"board_view_area",key:a},[Object(c["h"])("div",o,[Object(c["h"])("h1",null,[Object(c["h"])("small",null,Object(c["z"])(t.bTitle),1)])]),Object(c["h"])("div",l,[Object(c["h"])("small",null,"날짜 : "+Object(c["z"])(t.bDate),1)]),Object(c["h"])("div",d,[Object(c["h"])("small",null,"글쓴이 : "+Object(c["z"])(t.bName),1)]),Object(c["h"])("div",r,[Object(c["h"])("small",null,"게시물 번호 : "+Object(c["z"])(t.bId),1),Object(c["E"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return j.bId=t}),ref:"bId",class:"form-control",placeholder:"제목","aria-label":"Username","aria-describedby":"basic-addon1"},null,512),[[c["B"],j.bId]])]),Object(c["h"])("div",i,[Object(c["h"])("small",null,"조회수 : "+Object(c["z"])(t.bHit),1)]),Object(c["h"])("div",s,[Object(c["h"])("small",null,Object(c["z"])(t.bContent),1)]),Object(c["h"])("div",u,[Object(c["h"])("button",h,[Object(c["h"])("a",{href:"/modify_view?bId="+t.bId},"수정",8,["href"])]),Object(c["h"])("button",{type:"button",onClick:e[2]||(e[2]=function(t){return O.doDelete()}),id:"delete",class:"btn btn-dark"},"삭제")])])})),128))],64)})),O=a("bc3a"),f=a.n(O),m={data:function(){return{body:this.$route.query,bId:this.$route.query.bId,boardData:""}},created:function(){},mounted:function(){this.fnGetView()},methods:{fnGetView:function(){var t=this,e=this.bId;f.a.get("http://192.168.200.148:8082/mymy/Board_view",{params:{bId:e}}).then((function(e){console.log(e),t.boardData=e.data,console.log("boardData!!!"+t.boardData)})).catch((function(t){console.log(t)}))},doDelete:function(){var t=this.bId;console.log(t);var e=confirm("게시물을 삭제할까요?");if(!e)return alert("게시물 삭제를 취소합니다."),!1;alert("게시물을 삭제합니다."),f.a.get("http://192.168.200.148:8082/mymy/delete",{params:{bId:t}}).then((function(t){console.log(t),t.data.success||(alert("삭제되었습니다."),window.location.href="/")}))}}};a("8a0b");m.render=j,m.__scopeId="data-v-830a94ac";e["default"]=m},"8a0b":function(t,e,a){"use strict";a("face")},face:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6867d300.8a897211.js.map