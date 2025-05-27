'use client';

import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ConfirmForm from './ConfirmForm';
import CompleteMessage from './CompleteMessage';
import { ContactFormData } from '../types';

type FormStep = 'input' | 'confirm' | 'complete';

export default function ContactClient() {
  const [step, setStep] = useState<FormStep>('input');
  const [formData, setFormData] = useState<ContactFormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacyPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirm');
  };

  const handleBack = () => {
    setStep('input');
  };

  const handleConfirm = async () => {
    console.log('送信データ:', formData);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('APIレスポンス:', result);
      if (!response.ok) {
        console.error('APIエラー:', result);
        alert('送信に失敗しました。時間をおいて再度お試しください。');
        return;
      }
      setStep('complete');
    } catch (error) {
      console.error('送信時エラー:', error);
      alert('送信時にエラーが発生しました。');
    }
  };

  return (
    <>
      {step === 'input' && (
        <ContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
      {step === 'confirm' && (
        <ConfirmForm
          formData={formData}
          onBack={handleBack}
          onSubmit={handleConfirm}
        />
      )}
      {step === 'complete' && <CompleteMessage />}
    </>
  );
}
