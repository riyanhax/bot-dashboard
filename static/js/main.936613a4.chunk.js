(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){e.exports=a(251)},152:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);a(147);var r=a(141),n=a(55),c=a.n(n),o=a(28),l=a(93),i=a(118),u=a(119),s=a(142),m=a(120),f=a(143),d=a(1),b=a.n(d),p=(a(152),a(90)),g=a(257),h=a(260),k=a(261),E=a(258),v=a(57),x=a(124),w=a.n(x).a.create({baseURL:"https://telegrafme.herokuapp.com/indicator"}),y={fetchOhlcv:function(){return w.get("/binance")}},S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={market:[],chunk:[],base:"BTC",search:"",sort:!1,favorite:[],page:"dashboard"},e._cache=new v.c({defaultHeight:50,fixedWidth:!0}),e._mostRecentWidth=0,e.fetchLocalData=function(){e.localData=JSON.parse(localStorage.getItem("ohlcvData"))},e.fetchAllTickers=Object(l.a)(c.a.mark(function t(){var a,r,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.fetchOhlcv();case 2:a=t.sent,r=a.data,n=r.map(function(e){return Object(o.a)({},e,{bg:"white",toggle:!1})}),e.setState({market:n},function(){e.getSocket()});case 6:case"end":return t.stop()}},t,this)})),e.orderBy=function(){e.setState(function(e){return{sort:!e.sort,market:e.sort?e.market.sort(function(e,t){return e.ma.maFourly.percentage-t.ma.maFourly.percentage}):e.market.sort(function(e,t){return t.ma.maFourly.percentage-e.ma.maFourly.percentage})}})},e.saveFavorite=function(){localStorage.setItem("favorite",JSON.stringify(e.state.favorite))},e.getFavorite=function(){var t=JSON.parse(localStorage.getItem("favorite"));e.setState({favorite:t||[]})},e.renderIndicator=function(t){var a=t.index,n=t.key,c=t.style,l=t.parent,i=e.state,u=i.market,s=i.favorite,m=i.page,f=i.search,d=i.base,h=u.filter(function(e){return e.base===d}).filter(function(e){return-1!==[e.id,e.fib.s1.percentage].join("").indexOf(f.toUpperCase())}),k=("dashboard"===m?h:"ma725"===m?u.filter(function(e){return!0===e.ma.maFourly.twentyFiveSeven.cross.up}):s.map(function(e){return u.find(function(t){return t.id===e})}))[a],E=k.id,x=k.ticker,w=k.rsi,y=w.daily,S=w.fourly,O=k.market.precision,I=k.bg,j=k.toggle,F=k.fib,D=F.s3,T=F.s2,N=F.s1,R=F.p,B=F.r3,W=F.r2,A=F.r1,H=k.ma.maFourly,U=H.ninety,J=(H.seven,H.twentyFive,H.twentyFiveSeven);return b.a.createElement(v.b,{cache:e._cache,columnIndex:0,key:n,parent:l,rowIndex:a,width:e._mostRecentWidth},b.a.createElement(p.a,{style:[{borderBottomColor:"black",borderWidth:1,minHeight:60},c],key:n},b.a.createElement(p.a,{style:{flexDirection:"row",justifyContent:"space-between",flex:1}},b.a.createElement(C,{text:E,onPress:function(){return e.setState(function(e){return{favorite:"dashboard"===m?[].concat(Object(r.a)(e.favorite),[E]):e.favorite.filter(function(e){return e!==E})}},function(){e.saveFavorite()})}}),b.a.createElement(C,{text:P(x.last,O.price),backgroundColor:I,bold:!0,onPress:function(){return e.setState(function(e){return{market:e.market.map(function(e){return e.id===E?Object(o.a)({},e,{toggle:!e.toggle}):Object(o.a)({},e)})}})}}),b.a.createElement(C,{text:Number(x.percentage).toFixed(2),percentage:!0,backgroundColor:x.percentage>0?"#42f474":x.percentage<0?"#f44141":"white"}),b.a.createElement(C,{text:P(S.lastRSI,2),backgroundColor:S.lastRSI<25?"#42f474":"white"}),b.a.createElement(C,{text:P(y.lastRSI,2),backgroundColor:y.lastRSI<25?"#42f474":"white"}),b.a.createElement(C,{text:N.percentage,percentage:!0,backgroundColor:N.percentage<1?"#42f474":"white"}),b.a.createElement(C,{text:U.percentage,percentage:!0,backgroundColor:x.last>U.price?"#42f474":"#f44141"}),b.a.createElement(C,{text:J.percentage.last,percentage:!0,backgroundColor:J.cross.up?"#42f474":J.cross.down?"#f44141":"white"}),b.a.createElement(C,{text:P(B.price,O.price)}),b.a.createElement(C,{text:P(W.price,O.price)}),b.a.createElement(C,{text:P(A.price,O.price)}),b.a.createElement(C,{text:P(R.price,O.price)}),b.a.createElement(C,{text:P(N.price,O.price)}),b.a.createElement(C,{text:P(T.price,O.price)}),b.a.createElement(C,{text:P(D.price,O.price)})),j&&b.a.createElement(p.a,{style:{flex:1,minHeight:40,backgroundColor:"blue"}},b.a.createElement(p.a,{style:{flexDirection:"row",flex:1,justifyContent:"space-around"}},b.a.createElement(g.a,null,"Ok 1"),b.a.createElement(g.a,null,"Ok 2"),b.a.createElement(g.a,null,"Ok 3"),b.a.createElement(g.a,null,"Ok 4"),b.a.createElement(g.a,null,"Ok 5"),b.a.createElement(g.a,null,"Ok 6"),b.a.createElement(g.a,null,"Ok 7")),b.a.createElement(p.a,{style:{flexDirection:"row",flex:1,justifyContent:"space-around"}},b.a.createElement(g.a,null,"Ok 1"),b.a.createElement(g.a,null,"Ok 2"),b.a.createElement(g.a,null,"Ok 3"),b.a.createElement(g.a,null,"Ok 4"),b.a.createElement(g.a,null,"Ok 5"),b.a.createElement(g.a,null,"Ok 6"),b.a.createElement(g.a,null,"Ok 7")))))},e.socket=new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr@3000ms"),e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllTickers(),this.interval=setInterval(Object(l.a)(c.a.mark(function t(){var a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.fetchOhlcv();case 2:a=t.sent,r=a.data,e.setState(function(e){return{market:e.market.map(function(e){return Object(o.a)({bg:e.bg,toggle:e.toggle},r.find(function(t){return t.id===e.id}))})}});case 5:case"end":return t.stop()}},t,this)})),6e4),this.getFavorite()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getSocket",value:function(){var e=this;this.socket.onmessage=function(t){var a=t.data;e.setState(function(e){return{market:e.market.map(function(e){var t=JSON.parse(a).find(function(t){return t.s===e.id});return Object(o.a)({},e,{ticker:Object(o.a)({},e.ticker,{last:t?Number(t.c):Number(e.ticker.last),percentage:t?j({lastPrice:t.c,openPrice:t.o}):Number(e.ticker.percentage)}),fib:Object(o.a)({},e.fib,{s1:Object(o.a)({},e.fib.s1,{percentage:t?j({lastPrice:t.c,openPrice:e.data.s1}):e.fib.s1.percentage})}),bg:t?Number(t.c)>Number(e.ticker&&e.ticker.last)?"#42f474":Number(t.c)<Number(e.ticker&&e.ticker.last)?"#f44141":"white":e.bg})})}})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.market,r=t.favorite,n=t.page,c=t.search,o=t.base,l=a.filter(function(e){return e.base===o}).filter(function(e){return-1!==[e.id,e.fib.s1.percentage].join("").indexOf(c.toUpperCase())}),i="dashboard"===n?l:"ma725"===n?a.filter(function(e){return!0===e.ma.maFourly.twentyFiveSeven.cross.up}):r.map(function(e){return a.find(function(t){return t.id===e})});return b.a.createElement(p.a,null,b.a.createElement(p.a,{style:{width:"100%",backgroundColor:"white",borderColor:"black",position:"fixed",left:10,top:0,paddingTop:10,zIndex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}},b.a.createElement(p.a,{style:{flexDirection:"row"}},b.a.createElement(g.a,null,"Base Pair : "),b.a.createElement(h.a,{selectedValue:o,style:{height:30,width:100},onValueChange:function(t){return e.setState({base:t})}},b.a.createElement(h.a.Item,{label:"BTC",value:"BTC"}),b.a.createElement(h.a.Item,{label:"USDT",value:"USDT"}),b.a.createElement(h.a.Item,{label:"TUSD",value:"TUSD"}),b.a.createElement(h.a.Item,{label:"PAX",value:"PAX"}),b.a.createElement(h.a.Item,{label:"ETH",value:"ETH"}))),b.a.createElement(p.a,{style:{flexDirection:"row",alignItems:"center"}},b.a.createElement(g.a,null,"Search :"),b.a.createElement(k.a,{onChange:function(t){var a=t.target.value;return e.setState({search:a})},style:{borderColor:"black",width:150,height:25,borderWidth:1}})),b.a.createElement(C,{text:"ma 7/25 up",onPress:function(){return e.setState({page:"ma725"})}}),b.a.createElement(C,{text:"Favorite ".concat(r.length),onPress:function(){return e.setState({page:"favorite"})}}),b.a.createElement(C,{text:"Dashboard",onPress:function(){return e.setState({page:"dashboard"})}})),b.a.createElement(O,{orderBy:this.orderBy}),b.a.createElement(v.a,null,function(t){var a=t.width;return b.a.createElement(v.d,{deferredMeasurementCache:e._cache,style:{marginTop:40},rowCount:i.length,rowRenderer:e.renderIndicator,width:a,height:600,overscanRowCount:1,rowHeight:e._cache.rowHeight})}))}}]),t}(b.a.PureComponent),O=function(e){var t=e.orderBy;return b.a.createElement(p.a,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",top:40,borderColor:"black",backgroundColor:"white",borderWidth:1}},b.a.createElement(C,{bold:!0,text:"Pair"}),b.a.createElement(C,{bold:!0,text:"Last Price"}),b.a.createElement(C,{bold:!0,text:"24h Chg%"}),b.a.createElement(C,{bold:!0,text:"RSI 4H"}),b.a.createElement(C,{bold:!0,text:"RSI 1D"}),b.a.createElement(C,{bold:!0,text:"S1%"}),b.a.createElement(C,{bold:!0,text:"MA90%",onPress:function(){return t()}}),b.a.createElement(C,{bold:!0,text:"(MA7/25)%"}),b.a.createElement(C,{bold:!0,text:"R3"}),b.a.createElement(C,{bold:!0,text:"R2"}),b.a.createElement(C,{bold:!0,text:"R1"}),b.a.createElement(C,{bold:!0,text:"P"}),b.a.createElement(C,{bold:!0,text:"S1"}),b.a.createElement(C,{bold:!0,text:"S2"}),b.a.createElement(C,{bold:!0,text:"S3"}))},C=function(e){var t=e.text,a=e.percentage,r=e.bold,n=e.backgroundColor,c=e.onPress;return b.a.createElement(E.a,{style:{width:"6.0%",alignItems:"center",backgroundColor:n,justifyContent:"center"},onPress:c},b.a.createElement(g.a,{style:{fontWeight:r?"bold":"normal"}},t," ",a?"%":""))},I=S,j=function(e){var t=e.lastPrice,a=e.openPrice;return((F(t)-F(a))/F(a)*100).toFixed(2)},P=function(e,t){return Number(e).toFixed(t)},F=function(e){return Number(e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(259);a(249);D.a.registerComponent("App",function(){return I}),D.a.runApplication("App",{initialProps:{},rootTag:document.getElementById("root")}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,2,1]]]);
//# sourceMappingURL=main.936613a4.chunk.js.map