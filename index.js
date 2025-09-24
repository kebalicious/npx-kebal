const chalk = require('chalk')
const inquirer = require('inquirer')
const data = require('./lib/data')

// Display functions
function displayHeader() {
    console.clear()
    console.log(chalk.green(data.asciiArt))
    console.log()
    console.log(chalk.cyan.bold('    Full Stack Developer • Shah Alam, Malaysia'))
    console.log(chalk.gray('    & much more!'))
    console.log()
}

function displayContact() {
    console.log(chalk.yellow.bold('📫 Contact & Links:'))
    console.log(chalk.white(`   Website: ${data.contact.website}`))
    console.log(chalk.white(`   LinkedIn: ${data.contact.linkedin}`))
    console.log(chalk.white(`   GitHub: ${data.contact.github}`))
    console.log(chalk.white(`   Contact Form: ${data.contact.contact_form}`))
    console.log()
}

function displayProjects() {
    console.log(chalk.yellow.bold('🚀 Featured Projects:'))
    data.projects.forEach(project => {
        console.log(chalk.cyan(`   [${project.id}] ${project.name}`))
        console.log(chalk.gray(`       ${project.description}`))
        console.log(chalk.green(`       Tech: ${project.technologies.join(', ')}`))
        console.log(chalk.magenta(`       Status: ${project.status}`))
        if (project.link !== 'Private Repository' && project.link !== 'Coming Soon') {
            console.log(chalk.blue(`       Link: ${project.link}`))
        }
        console.log()
    })
}

function displayExperience() {
    console.log(chalk.yellow.bold('💼 Work Experience:'))
    data.experience.forEach(exp => {
        console.log(chalk.cyan(`   [${exp.id}] ${exp.role} at ${exp.company}`))
        console.log(chalk.gray(`       Period: ${exp.period}`))
        console.log(chalk.white(`       ${exp.description}`))
        console.log(chalk.green('       Key Achievements:'))
        exp.achievements.forEach(achievement => {
            console.log(chalk.green(`         • ${achievement}`))
        })
        console.log()
    })
}

function displayEducation() {
    console.log(chalk.yellow.bold('🎓 Education:'))
    data.education.forEach(edu => {
        console.log(chalk.cyan(`   [${edu.id}] ${edu.degree}`))
        console.log(chalk.gray(`       ${edu.institution}`))
        console.log(chalk.white(`       Field: ${edu.field}`))
        console.log(chalk.white(`       Period: ${edu.period}`))
        console.log(chalk.green(`       Status: ${edu.status}`))
        if (edu.achievements) {
            console.log(chalk.green('       Highlights:'))
            edu.achievements.forEach(achievement => {
                console.log(chalk.green(`         • ${achievement}`))
            })
        }
        console.log()
    })
}

function displaySkills() {
    console.log(chalk.yellow.bold('⚡ Technical Skills:'))
    console.log(chalk.cyan('   Languages:'))
    console.log(chalk.white(`     ${data.skills.languages.join(', ')}`))
    console.log(chalk.cyan('   Frontend:'))
    console.log(chalk.white(`     ${data.skills.frontend.join(', ')}`))
    console.log(chalk.cyan('   Backend:'))
    console.log(chalk.white(`     ${data.skills.backend.join(', ')}`))
    console.log(chalk.cyan('   Databases:'))
    console.log(chalk.white(`     ${data.skills.databases.join(', ')}`))
    console.log(chalk.cyan('   Cloud & DevOps:'))
    console.log(chalk.white(`     ${data.skills.cloud.join(', ')}`))
    console.log(chalk.cyan('   Tools:'))
    console.log(chalk.white(`     ${data.skills.tools.join(', ')}`))
    console.log(chalk.cyan('   Specialties:'))
    console.log(chalk.white(`     ${data.skills.specialties.join(', ')}`))
    console.log()
}

function displayAboutMe() {
    console.log(chalk.yellow.bold('👨‍💻 About Me:'))
    console.log(chalk.white(`   ${data.profile.aboutMe}`))
    console.log()
    console.log(chalk.cyan('   Interests:'))
    console.log(chalk.white(`   ${data.profile.interests.join(', ')}`))
    console.log()
    console.log(chalk.cyan('   Location: ') + chalk.white(data.profile.location))
    console.log(chalk.cyan('   Timezone: ') + chalk.white(data.profile.timezone))
    console.log()
}

async function showMainMenu() {
    const choices = [
        { name: '📫 Contact & Links', value: 'contact' },
        { name: '🚀 View Projects', value: 'projects' },
        { name: '💼 Work Experience', value: 'experience' },
        { name: '🎓 Education', value: 'education' },
        { name: '⚡ Technical Skills', value: 'skills' },
        { name: '👨‍💻 About Me', value: 'about' },
        { name: '🚪 Exit', value: 'exit' }
    ]

    // Small delay to ensure terminal is ready
    await new Promise(resolve => setTimeout(resolve, 100))

    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to know about me?',
            choices: choices,
            pageSize: 10,
            loop: false
        }
    ])

    return action
}

async function showProjectDetails() {
    const projectChoices = data.projects.map(project => ({
        name: `${project.name} - ${project.description}`,
        value: project.id
    }))
    projectChoices.push({ name: '← Back to main menu', value: 'back' })

    const { projectId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'projectId',
            message: 'Which project would you like to know more about?',
            choices: projectChoices
        }
    ])

    if (projectId === 'back') return 'menu'

    const project = data.projects.find(p => p.id === projectId)
    if (project) {
        console.log()
        console.log(chalk.yellow.bold(`🚀 ${project.name}`))
        console.log(chalk.white(`   ${project.description}`))
        console.log()
        console.log(chalk.cyan('   Technologies Used:'))
        project.technologies.forEach(tech => {
            console.log(chalk.green(`     • ${tech}`))
        })
        console.log()
        console.log(chalk.cyan(`   Status: `) + chalk.magenta(project.status))
        if (project.link && project.link !== 'Private Repository' && project.link !== 'Coming Soon') {
            console.log(chalk.cyan(`   Link: `) + chalk.blue(project.link))
        }
        console.log()
        
        await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
    }
    
    return 'projects'
}

async function runInteractiveMode() {
    let currentView = 'menu'
    
    while (currentView !== 'exit') {
        switch (currentView) {
            case 'menu':
                displayHeader()
                currentView = await showMainMenu()
                break
            case 'contact':
                displayHeader()
                displayContact()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            case 'projects':
                displayHeader()
                displayProjects()
                currentView = await showProjectDetails()
                break
            case 'experience':
                displayHeader()
                displayExperience()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            case 'education':
                displayHeader()
                displayEducation()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            case 'skills':
                displayHeader()
                displaySkills()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            case 'about':
                displayHeader()
                displayAboutMe()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            default:
                currentView = 'exit'
        }
    }
    
    console.log()
    console.log(chalk.green.bold('Thanks for checking out my profile! 👋'))
    console.log(chalk.cyan('Feel free to reach out anytime.'))
    console.log()
}

module.exports = ({ json }) => {
    if (json) {
        return JSON.stringify(data, null, 2)
    } else {
        runInteractiveMode().catch(console.error)
        return '' // Return empty string to avoid double output
    }
}