---
layout: paper
title: "Expanding Soliton Models for Kähler-Ricci Flow Near Conical Singularities"
title_ja: "錐特異点近傍のKähler–Ricci flowに対する膨張ソリトン模型"
authors: "Longteng Chen, Max Hallgren, Lucas Lavoyer"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
arxiv_abstract: >-
  Let $(Y,g_0)$ be a compact analytic space with a finite number of singular points, where the metric at each singular point is modelled on a Kähler cone with smooth canonical model. We show that the Kähler-Ricci flow with such initial data satisfies a $C/t$ curvature bound, and that the flow near each singular point is modelled on the unique Kähler-Ricci expander asymptotic to the corresponding cone. Our motivation is to give a geometric description of the Kähler--Ricci flow emerging from singularities arising in the analytic minimal model program.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - singularities
  - complex-analytic-spaces
  - metric-limits
arxiv_id: "2604.04223v3"
arxiv_url: "https://arxiv.org/abs/2604.04223"
arxiv_submitted: "2026-04-05"
arxiv_updated: "2026-08-19"
summary: >-
  孤立錐特異点をもつコンパクト解析空間から出発するKähler–Ricci flowを構成し、曲率の$C/t$評価と膨張ソリトンによる局所模型を示します。錐に滑らかなcanonical modelがあるという仮定の下、自然なクラスでflowの一意性も得ます。
abstract_en: ""
summary_en: >-
  The authors construct a Kähler–Ricci flow starting from a compact analytic space with finitely many isolated conical singularities. When each cone has a smooth canonical model, the emerging smooth flow has Type-I-scale curvature control and converges back to the singular metric away from the exceptional sets. Every parabolic blow-up at an exceptional fiber is the unique asymptotically conical expanding Kähler–Ricci soliton associated with that cone. A uniqueness statement identifies the construction with canonical weak flows under a natural scalar-curvature or potential bound.
abstract_ja: >-
  有限個の孤立錐特異点をもつコンパクト解析空間を初期値とし、各錐が滑らかなcanonical modelをもつ場合のKähler–Ricci flowを構成する。flowは$C/t$の曲率評価を満たし、特異点から離れて初期計量へ滑らかに戻る。例外集合上の放物型拡大は対応する錐に漸近する一意なKähler–Ricci膨張ソリトンへ収束する。
abstract_source_url: "https://arxiv.org/abs/2604.04223"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.04223v3](https://arxiv.org/abs/2604.04223)
- **著者:** Longteng Chen, Max Hallgren, Lucas Lavoyer
- **初回投稿日:** 2026年4月5日
- **最終更新日:** 2026年8月19日
- **主分類・副分類:** math.DG（主分類）、math.AP
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

特異な初期空間からRicci flowを開始するとき、存在だけでなく、flowが特異点をどの幾何で解消するかを知ることが問題になる。本論文は、Kähler錐でモデル化された孤立特異点をもつコンパクト解析空間を扱う。

各錐に滑らかなcanonical modelがあると仮定し、適切なKähler resolution上に正時刻の滑らかなKähler–Ricci flowを構成する。時刻0へ戻すとGromov–Hausdorff位相で元の空間へ収束し、特異点の外では計量も局所的に滑らかに収束する。

中心的な内容は、曲率が$C/t$で抑えられ、各例外fiberのまわりを時刻と同じ尺度で拡大すると、対応する錐に漸近する一意な膨張Kähler–Ricciソリトンが現れることである。これは解析的MMPの特異時刻から出ていくflowに具体的な局所像を与える。

曲率符号は仮定しない。一方、初期特異点が孤立錐型でcanonical modelが滑らかという条件は不可欠な適用範囲である。

## 背景と問題設定

Riemannianの場合には正曲率錐へ膨張ソリトンをgluingする構成が知られていたが、得られるflowの一意性やKähler性は一般には保証されない。Kählerの場合は複素Monge–Ampère方程式とAC膨張ソリトンの存在・一意性を利用できる反面、従来の弱安定性理論をそのまま使えない。本論文はKählerポテンシャルの水準でgluingを制御する。

## 主結果

### 主定理（Theorem A）

各点$y_i$の近傍が滑らかなcanonical modelをもつKähler錐$C(S_i)$でモデル化された$(Y,g_0)$に対し、Kähler resolution $\pi:M\to Y$上のflow $g(t)$が存在し、

$$
\max_M|\operatorname{Rm}(g(t))|_{g(t)}\leq \frac{C_M}{t}
$$

を満たす。$(M,d_{g(t)})$は$t\to0^+$で$Y$へGromov–Hausdorff収束し、特異点外では$\pi_*g(t)\to g_0$である。さらに$p\in\pi^{-1}(y_i)$で

$$
(M,\tau^{-1}g(\tau t),p)\longrightarrow(E_i,g_{E_i}(t),q)
$$

がsmooth pointed Cheeger–Gromovの意味で成立する。右辺は$C(S_i)$に漸近する一意なAC膨張Kähler–Ricciソリトンの自己相似flowである。上から$C/t$のscalar curvature boundをもつ同種のflowは、このflowと双正則写像を介して一致する。

### 実現結果（Corollary B）

任意のAC gradient Kähler–Ricci expanderが、ある射影多様体上のKähler–Ricci flowについて、時刻0の部分多様体に沿う局所拡大模型として実現される。

## 証明の見取り図

小さい尺度$s$で特異点近傍を切り取り、対応するAC膨張ソリトンをKählerポテンシャルの水準でgluingする。得られた滑らかな計量からflowを走らせ、錐に近い領域ではpseudolocalityを使い、中心部ではdrift項を含む複素Monge–Ampère方程式にbarrierと最大値原理を適用する。$s\downarrow0$で一様評価を保って極限を取り、曲率評価・局所ソリトン模型・一意性を順に得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.04223](https://arxiv.org/abs/2604.04223)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem A; Corollary B
- **論文構成の説明:** IntroductionのOverview、pp. 3–4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
