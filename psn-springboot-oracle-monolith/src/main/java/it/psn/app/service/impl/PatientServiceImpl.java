package it.psn.app.service.impl;

import it.psn.app.model.Patient;
import it.psn.app.repository.PatientRepository;
import it.psn.app.service.PatientService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

    private final PatientRepository repository;

    public PatientServiceImpl(PatientRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Patient> findAll() {
        return repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Patient> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Patient create(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public Optional<Patient> update(Long id, Patient patient) {
        return repository.findById(id).map(existing -> {
            existing.setFirstName(patient.getFirstName());
            existing.setLastName(patient.getLastName());
            return repository.save(existing);
        });
    }

    @Override
    public boolean delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
