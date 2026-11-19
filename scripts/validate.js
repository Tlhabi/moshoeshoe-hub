// Run: node scripts/validate.js   (checks content/content.json)
const d=require('../content/content.json');let e=0;
const bad=m=>{console.log('ERROR:',m);e++};
const tx=(o,w)=>{if(!o||!o.en||!o.st)bad('missing English or Sesotho text at '+w)};
const ids={};
d.subjects.forEach(s=>{tx(s.name,s.id);s.lessons.forEach(l=>{
 const w=s.id+'/'+l.id;
 if(ids[l.id])bad('duplicate lesson id '+w);ids[l.id]=1;
 if(!(l.grade>=1&&l.grade<=7))bad('grade must be 1-7 at '+w);
 tx(l.title,w);tx(l.topic,w);
 l.blocks.forEach((b,i)=>{const k=w+' block '+i;
  if(b.type==='activity'){tx(b.q,k);b.options.forEach(o=>tx(o,k));
   if(!(b.answer>=0&&b.answer<b.options.length))bad('answer index out of range at '+k)}
  else if(['text','tip'].includes(b.type))tx(b.text,k);
  else bad('unknown block type "'+b.type+'" at '+k)})})});
console.log(e?e+' problem(s) found':'Content OK');process.exit(e?1:0);
