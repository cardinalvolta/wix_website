const sections = [
  ['Company Overview', 'Cardinal Volta is a clean technology company that develops, manufactures and deploys solutions for industrial energy efficiency and process automation. The company has been recognized through the University of Toronto\u2019s Eva & Allen Lau Commercialization Prize and Magna International Global Facility Emissions Reduction Challenge. Our team works directly with industrial customers to bring engineering solutions from concept through implementation.'],
  ['The Role', 'We are seeking a Controls & Automation Engineering Co-op Student to support live engineering projects at an automotive manufacturing facility in Guelph, Ontario.', "This role combines plant-floor process engineering with hands-on controls work. The successful candidate will work closely with Cardinal Volta engineers and the plant's engineering, maintenance, and operations teams to map manufacturing processes, identify and define automation needs, support PLC/HMI development, and participate in system testing and commissioning."],
  ['Key Responsibilities'],
  ['Manufacturing Process & Automation', [
    'Work with plant engineering, maintenance, and operations personnel to observe and document current manufacturing processes.',
    'Map equipment, operator activities, material movement, workflow, and key process constraints on factory layouts.',
    'Support identification and evaluation of opportunities for robotics, material handling, equipment automation, and process improvement.',
    'Develop process maps, equipment layouts, requirements, concept documentation, and supporting engineering analyses.',
    'Assist with technical discussions, supplier information gathering, and evaluation of automation concepts and equipment.'
  ]],
  ['Controls & Commissioning', [
    'Support development, testing, deployment, and maintenance of PLC control programs and HMI functionality.',
    'Assist with setup, configuration, and troubleshooting of control hardware and software, including I/O, sensors, actuators, drives, and industrial communications.',
    'Participate in system functional testing, commissioning, and integration with existing plant systems.',
    'Assist in developing commissioning procedures, test plans, checklists, and technical documentation.',
    'Troubleshoot controls, electrical, instrumentation, and equipment-integration issues during testing and commissioning.',
    'Review engineering drawings, equipment documentation, and technical specifications as required.'
  ]],
  ['Candidate Qualifications', [
    'Currently enrolled in Mechanical Engineering, Electrical Engineering, Mechatronics Engineering, or a related engineering program, and eligible to complete a co-op or internship term.',
    'Strong interest in industrial automation, controls, manufacturing systems, robotics, or equipment commissioning.',
    'Ability to understand mechanical and electrical systems, engineering drawings, and technical specifications.',
    'Strong analytical, troubleshooting, and problem-solving skills.',
    'Comfort working in a hands-on industrial environment and communicating with engineers, maintenance personnel, operators, and suppliers.',
    'Strong written and verbal communication skills, with the ability to document observations and engineering work clearly.',
    'Proficiency with Microsoft Office applications, including Excel, Word, and PowerPoint.',
    'Ability to work independently as well as collaboratively within a multidisciplinary engineering team.',
    'Ability and willingness to work regularly at the Guelph project site as required.'
  ]],
  ['Preferred Experience', [
    'Familiarity with PLC programming and industrial automation concepts. Experience with Rockwell Automation / Allen-Bradley PLC systems is considered an asset.',
    'Experience with CAD, factory layouts, process mapping, time studies, or manufacturing process documentation is considered an asset.',
    'Exposure to robotics, sensors, actuators, VFDs, instrumentation, HMI/SCADA systems, or industrial networks is considered an asset.',
    'Programming or scripting experience in any language is considered an asset.',
    'Previous manufacturing, plant-floor, controls, automation, or hands-on technical experience is considered an asset.'
  ]],
  ['Co-op Term', 'The position is expected to begin in January 2027 and may be structured as an 8- or 12-month co-op term. The role will be hybrid, with regular work at the Guelph project site.']
];
const description = document.querySelector('#job-description');
for (const [title, ...content] of sections) {
  const heading = document.createElement('h3');
  heading.textContent = title;
  description.append(heading);
  for (const item of content) {
    const element = document.createElement(Array.isArray(item) ? 'ul' : 'p');
    if (Array.isArray(item)) {
      for (const text of item) {
        const li = document.createElement('li');
        li.textContent = text;
        element.append(li);
      }
    } else element.textContent = item;
    description.append(element);
  }
}
const dialog = document.querySelector('#job-dialog');
const opener = document.querySelector('#open-job');
opener.addEventListener('click', () => {
  dialog.showModal();
  document.body.classList.add('job-open');
  dialog.scrollTop = 0;
});
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('job-open');
  opener.focus();
});
