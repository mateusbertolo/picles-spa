import { Panel } from '../../../components/layout/Panel';
import styles from './Shelter.module.css';
import {useForm} from 'react-hook-form';
import z from 'zod';
import { useHookFormMask } from 'use-mask-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../components/common/Input';

const shelterSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(30, 'Nome deve ter no máximo 30 caracteres'),
  email: z.string().email('Campo deve ser e-mail'),
  phone: z.string().refine((value) => {
    const digits = value.replace(/\D/g, '').length;
    return digits >= 10 && digits <= 11;
  }),
  whatsapp: z.string().refine((value) => {
    const digits = value.replace(/\D/g, '').length;
    return digits >= 10 && digits <= 11;
  }),
});

type ShelterSchema = z.infer<typeof shelterSchema>;

export function Shelter() {
  const { register, handleSubmit, formState } = useForm<ShelterSchema>({
    resolver: zodResolver(shelterSchema),
  });

  const registerWithMask = useHookFormMask(register);

  function submit({ name, email, phone, whatsapp }: ShelterSchema) {
    console.log(name, email, phone, whatsapp);
  }

  return (
    <Panel>
      <form className={styles.container} onSubmit={handleSubmit(submit)}>
        <div>
          <Input label="Nome" {...register('name')} />
          {formState.errors?.name && (
            <p className={styles.formError}>{formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <Input label="Email" {...register('email')} />
          {formState.errors?.email && (
            <p className={styles.formError}>{formState.errors.email.message}</p>
          )}
        </div>
        <div>
          <Input label="Telefone" {...register('phone')} />
          {formState.errors?.phone && (
            <p className={styles.formError}>{formState.errors.phone.message}</p>
          )}
        </div>
        <div>
          <Input label="WhatsApp" {...register('whatsapp')} />
          {formState.errors?.whatsapp && (
            <p className={styles.formError}>{formState.errors.whatsapp.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Panel>
  );
}
