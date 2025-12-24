import { NextRequest, NextResponse } from 'next/server';

// TODO: 集成 Resend 发送邮件
// npm install resend
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, pets, message } = data;

    // 验证必填字段
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // TODO: 发送邮件通知
    // await resend.emails.send({
    //   from: 'PawPrint <noreply@pawprint.app>',
    //   to: 'your-email@example.com',
    //   subject: `New Demo Request from ${name}`,
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Number of Pets:</strong> ${pets || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${message || 'No message'}</p>
    //   `,
    // });

    console.log('Demo request received:', { name, email, phone, pets, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
