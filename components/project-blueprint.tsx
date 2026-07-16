const answers=[
 {label:"¿Qué es?",value:"Centro de ejecución de Marketing"},
 {label:"¿Dónde estamos?",value:"Estrategia en ejecución"},
 {label:"¿Qué falta?",value:"Resolver 10 bloqueos críticos"},
 {label:"¿Quién debe actuar?",value:"Roberto, Carlos, Julio, Alex y Marketing"},
 {label:"¿Qué pasa después?",value:"Habilitar Producción"},
];

export function ProjectBlueprint(){return <section className="project-blueprint dashboard-answers" aria-labelledby="dashboard-answers-title"><div className="dashboard-answers-heading"><span>Resumen rápido</span><h2 id="dashboard-answers-title">Resumen Ejecutivo</h2><p>Si solo lees una sección, lee esta.</p></div><dl>{answers.map((answer,index)=><div className={index===1||index===2||index===4?"summary-priority":undefined} key={answer.label}><dt>{answer.label}</dt><dd>{answer.value}</dd></div>)}</dl></section>}
