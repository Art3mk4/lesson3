import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { App } from '../App'

export default {
    title: 'App component',
    component: App,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />