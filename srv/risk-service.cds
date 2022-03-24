using {sap.ui.riskmanagement as my} from '../db/schema';

@path : 'service/risk'
@requires : 'authenticated-user'
service RiskService {
    entity Risks       as Select from my.Risks where createdBy = $user;
    entity Mitigations as projection on my.Mitigations;
}
