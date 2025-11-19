import { useState } from 'react';
import '../styles/Skills.scss'

const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState<'all' | keyof typeof skillCategories>('all');
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skillCategories = {
        languages: {
            title: 'Languages',
            icon: '💻',
            color: '#00D9FF',
            skills: [
                { name: 'JS & TS', level: 80, years: 4 },
                { name: 'Rust', level: 45, years: 0.3 },
                { name: 'Java', level: 80, years: 5 },
                { name: 'SQL', level: 95, years: 5 },
            ]
        },
        frontend: {
            title: 'Frontend',
            icon: '🎨',
            color: '#00FFF0',
            skills: [
                { name: 'React', level: 70, years: 1 },
                { name: 'Vue.js', level: 70, years: 1 },
                { name: 'Tailwind CSS', level: 95, years: 3 },
                { name: 'SCSS/SASS', level: 88, years: 2 },
                { name: 'HTML5', level: 95, years: 5 },
            ]
        },
        backend: {
            title: 'Backend',
            icon: '⚙️',
            color: '#4DFFFF',
            skills: [
                { name: 'Node.js', level: 87, years: 3 },
                { name: 'Express.js', level: 85, years: 3 },
                { name: 'MongoDB', level: 80, years: 2 },
                { name: 'REST APIs', level: 90, years: 4 },
            ]
        },
        tools: {
            title: 'Tools & DevOps',
            icon: '🛠️',
            color: '#00D9FF',
            skills: [
                { name: 'Git', level: 50, years: 4 },
                { name: 'Jetbrains', level: 100, years: 5 },
                { name: 'npm', level: 80, years: 4 },
            ]
        },
        soft: {
            title: 'Soft Skills',
            icon: '🎯',
            color: '#00FFF0',
            skills: [
                { name: 'Problem Solving', level: 90, years: 4 },
                { name: 'Team Work', level: 100, years: 5 },
                { name: 'Communication', level: 100, years: 5 },
                { name: 'Project Management', level: 80, years: 3 },
            ]
        }
    };

    const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

    const filteredSkills = selectedCategory === 'all'
        ? Object.entries(skillCategories).flatMap(([key, cat]) =>
            cat.skills.map(skill => ({ ...skill, category: key, categoryTitle: cat.title, color: cat.color }))
        )
        : skillCategories[selectedCategory].skills.map(skill => ({
            ...skill,
            category: selectedCategory,
            categoryTitle: skillCategories[selectedCategory].title,
            color: skillCategories[selectedCategory].color
        }));

    return (
        <div className="skills-section">
            <div className="skills-content-wrapper">
                {/* Header */}
                <div className="header-container">
                    <h2 className="skills-title">
                        Skill Tree
                    </h2>
                    <p className="skills-subtitle">
                        Explore my technical skills and expertise across different domains
                    </p>
                </div>

                <div className="category-filter">
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                    >
                        All Skills
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                        >
                            <span>{skillCategories[cat].icon}</span>
                            {skillCategories[cat].title}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="skill-item"
                            style={{
                                border: `1px solid ${hoveredSkill === skill.name ? skill.color : 'rgba(0, 217, 255, 0.1)'}`,
                                transform: hoveredSkill === skill.name ? 'translateY(-5px)' : 'translateY(0)',
                                boxShadow: hoveredSkill === skill.name
                                    ? `0 10px 40px ${hexToRgba(skill.color, 0.25)}`
                                    : 'none'
                            }}
                        >
                            <div className="skill-header">
                                <div>
                                    <h3 className="skill-name">
                                        {skill.name}
                                    </h3>
                                    {skill.categoryTitle && (
                                        <span
                                            className="skill-category-title"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.categoryTitle}
                                        </span>
                                    )}
                                </div>
                                <div
                                    className="skill-level-percentage"
                                    style={{ color: skill.color }}
                                >
                                    {skill.level}%
                                </div>
                            </div>

                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(to right, ${skill.color}, #00FFF0)`,
                                        boxShadow: `0 0 20px ${hexToRgba(skill.color, 0.5)}`
                                    }}
                                />
                            </div>

                            <div className="skill-years">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{skill.years} {skill.years === 1 ? 'year' : 'years'} experience</span>
                            </div>

                            {hoveredSkill === skill.name && (
                                <div
                                    className="hover-badge"
                                    style={{
                                        background: hexToRgba(skill.color, 0.12),
                                        color: skill.color
                                    }}
                                >
                                    {skill.level >= 90 ? '⭐ Expert Level' :
                                        skill.level >= 80 ? '🚀 Advanced' :
                                            skill.level >= 70 ? '💪 Intermediate' :
                                                '📚 Learning'}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="stats-summary">
                    <div className="stat-item">
                        <div className="stat-value">
                            {Object.values(skillCategories).reduce((acc: number, cat) => acc + cat.skills.length, 0)}
                        </div>
                        <div className="stat-label">Total Skills</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-value">
                            {categories.length as number}
                        </div>
                        <div className="stat-label">Categories</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-value">
                            {Math.round(
                                Object.values(skillCategories)
                                    .flatMap(cat => cat.skills)
                                    .reduce((acc, skill) => acc + skill.level, 0) /
                                Object.values(skillCategories).reduce((acc, cat) => acc + cat.skills.length, 0)
                            )}%
                        </div>
                        <div className="stat-label">Avg. Proficiency</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-value">
                            5+
                        </div>
                        <div className="stat-label">Years Coding</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
