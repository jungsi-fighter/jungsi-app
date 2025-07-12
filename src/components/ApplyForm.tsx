import { useForm } from 'react-hook-form';

export default function ApplyForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">신청하기</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium mb-1">이름</label>
            <input {...register('name')} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium mb-1">연락처</label>
            <input {...register('phone')} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block font-medium mb-1">참여 프로그램</label>
            <select {...register('program')} className="w-full border px-3 py-2 rounded">
              <option>정시파이터반</option>
              <option>주말 정시파이터</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-accent text-white py-3 rounded hover:bg-primary transition">신청 완료</button>
        </form>
      </div>
    </section>
  );
}
