'use client';
import React from 'react';

type Props = {};

export default function CurrentYear({}: Props) {
	return <span>{new Date().getFullYear()}</span>;
}
