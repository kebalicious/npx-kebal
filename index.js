const chalk = require('chalk')
const inquirer = require('inquirer')
const data = require('./lib/data')

// Helper function to center text
function centerText(text, width = process.stdout.columns || 80) {
    const lines = text.split('\n')
    return lines.map(line => {
        const padding = Math.max(0, Math.floor((width - line.length) / 2))
        return ' '.repeat(padding) + line
    }).join('\n')
}

// Display functions
function displayHeader() {
    console.clear()
    const centeredArt = centerText(data.asciiArt)
    console.log(chalk.green(centeredArt))
    console.log()
    const tagline = 'Full Stack Developer • Shah Alam, Malaysia'
    console.log(chalk.cyan.bold(centerText(tagline)))
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
    console.log(chalk.yellow.bold('🚀 Projects:'))
    data.projects.forEach(project => {
        console.log(chalk.cyan(`   [${project.id}] ${project.name}`) + chalk.gray(` (${project.category})`))
        console.log(chalk.gray(`       ${project.description}`))
        console.log(chalk.green(`       Tech: ${project.technologies.join(', ')}`))
        console.log(chalk.magenta(`       Status: ${project.status}`))
        if (project.completed_date) {
            console.log(chalk.yellow(`       Completed: ${project.completed_date}`))
        }
        if (project.link) {
            console.log(chalk.blue(`       Link: ${project.link}`))
        }
        if (project.github) {
            console.log(chalk.blue(`       GitHub: ${project.github}`))
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
    console.log(chalk.cyan('   Frameworks:'))
    console.log(chalk.white(`     ${data.skills.frameworks.join(', ')}`))
    console.log(chalk.cyan('   Frontend Technologies:'))
    console.log(chalk.white(`     ${data.skills.frontend.join(', ')}`))
    console.log(chalk.cyan('   Databases:'))
    console.log(chalk.white(`     ${data.skills.databases.join(', ')}`))
    console.log(chalk.cyan('   Cloud Services:'))
    console.log(chalk.white(`     ${data.skills.cloud_services.join(', ')}`))
    console.log(chalk.cyan('   Development Tools:'))
    console.log(chalk.white(`     ${data.skills.tools.join(', ')}`))
    console.log(chalk.cyan('   CMS Platforms:'))
    console.log(chalk.white(`     ${data.skills.cms_platforms.join(', ')}`))
    console.log(chalk.cyan('   Design Tools:'))
    console.log(chalk.white(`     ${data.skills.design_tools.join(', ')}`))
    console.log(chalk.cyan('   Integrations:'))
    console.log(chalk.white(`     ${data.skills.integrations.join(', ')}`))
    console.log(chalk.cyan('   Specialties:'))
    console.log(chalk.white(`     ${data.skills.specialties.join(', ')}`))
    console.log()
}

function displayInterests() {
    console.log(chalk.yellow.bold('🎯 Interests & Hobbies:'))
    data.interests.forEach(interest => {
        console.log(chalk.green(`   • ${interest}`))
    })
    console.log()
    console.log(chalk.gray('   "Learning is my passion, and coding is my everyday pill."'))
    console.log()
}

function displayAboutMe() {
    console.log(chalk.yellow.bold('👨‍💻 About Me:'))
    console.log(chalk.white(`   ${data.profile.aboutMe}`))
    console.log()
    console.log(chalk.cyan('   Name: ') + chalk.white(data.profile.fullName))
    console.log(chalk.cyan('   Role: ') + chalk.white(data.profile.title))
    console.log(chalk.cyan('   Location: ') + chalk.white(data.profile.location))
    console.log(chalk.cyan('   Timezone: ') + chalk.white(data.profile.timezone))
    console.log()
    console.log(chalk.yellow.bold('📫 Contact & Links:'))
    console.log(chalk.white(`   Website: ${data.contact.website}`))
    console.log(chalk.white(`   LinkedIn: ${data.contact.linkedin}`))
    console.log(chalk.white(`   GitHub: ${data.contact.github}`))
    console.log(chalk.white(`   Contact Form: ${data.contact.contact_form}`))
    console.log()
}

async function showMainMenu() {
    const choices = [
        { name: '1. ‍💻 About Me', value: 'about' },
        { name: '2. ⚡ Technical Skills', value: 'skills' },
        { name: '3. 💼 Work Experience', value: 'experience' },
        { name: '4. 🎓 Education Background', value: 'education' },
        { name: '5. 🚀 Projects', value: 'projects' },
        { name: '6. 🎯 Interests & Hobbies', value: 'interests' },
        { name: '7. 🚪 Exit', value: 'exit' }
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

    // If user selects exit, show thanks message immediately
    if (action === 'exit') {
        console.clear()
        const centeredArt = centerText(data.asciiArt)
        console.log(chalk.green(centeredArt))
        console.log()
        const tagline = 'Full Stack Developer • Shah Alam, Malaysia'
        console.log(chalk.cyan.bold(centerText(tagline)))
        console.log()
        console.log()
        console.log(chalk.green.bold(centerText('Thanks for checking out my profile! 👋')))
        console.log(chalk.cyan(centerText('Feel free to reach out anytime.')))
        console.log()
    }

    return action
}



async function runInteractiveMode() {
    let currentView = 'menu'
    
    while (currentView !== 'exit') {
        switch (currentView) {
            case 'menu':
                displayHeader()
                currentView = await showMainMenu()
                break
            case 'projects':
                displayHeader()
                displayProjects()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
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
            case 'interests':
                displayHeader()
                displayInterests()
                await inquirer.prompt([{ type: 'input', name: 'continue', message: 'Press Enter to continue...' }])
                currentView = 'menu'
                break
            case 'exit':
                currentView = 'exit'
                break
            default:
                currentView = 'exit'
        }
    }
}

module.exports = ({ json }) => {
    if (json) {
        return JSON.stringify(data, null, 2)
    } else {
        runInteractiveMode().catch(console.error)
        return '' // Return empty string to avoid double output
    }
}