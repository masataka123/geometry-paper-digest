---
layout: paper
title: "Stability conditions on threefolds with vanishing Chern classes"
title_ja: "Chern類が消える三次元多様体上の安定性条件"
authors: "Hao Max Sun"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove the Bogomolov-Gieseker type inequality conjectured by Bayer, Macri and Toda for threefolds with semistable tangent bundles and vanishing Chern classes in any characteristic, which was originally proved by Bayer, Macri and Stellari in characteristic zero. This gives the existence of Bridgeland stability conditions on such threefolds. As applications, we obtain Reider type theorem and confirm Fujita's conjecture for such threefolds in any characteristic.
topic: algebraic-geometry
tags:
  - positive-characteristic
  - vector-bundles-sheaves
  - stability
  - chern-classes
arxiv_id: "2006.00756v3"
arxiv_url: "https://arxiv.org/abs/2006.00756"
arxiv_submitted: "2020-06-01"
arxiv_updated: "2021-04-12"
summary: >-
  標数を問わず、接束が斜率半安定でChern類が数値的に消える滑らかな射影三次元多様体に対し、Bayer–Macrì–Toda型Bogomolov–Gieseker不等式を証明する。これによりBridgeland安定性条件の存在を得て、Reider型消滅定理とFujita予想を導く。
abstract_en: ""
summary_en: >-
  The paper establishes the Bayer–Macrì–Toda Bogomolov–Gieseker inequality for smooth projective threefolds with numerically trivial canonical class, vanishing second Chern intersection, and semistable tangent bundle over an algebraically closed field of arbitrary characteristic. This yields Bridgeland stability conditions in a setting that is especially new in positive characteristic. Frobenius pullbacks and Riemann–Roch estimates control the third Chern character. Applications include a Reider-type vanishing statement and the predicted global generation and very ampleness bounds from Fujita's conjecture.
abstract_ja: >-
  接束が半安定でChern類が消える三次元多様体について、Bayer–Macrì–Todaが予想したBogomolov–Gieseker型不等式を任意標数で証明する。標数零ではBayer–Macrì–Stellariにより既知であった結果を正標数へ拡張し、この種の三次元多様体上でBridgeland安定性条件の存在を得る。応用としてReider型定理を示し、任意標数でFujita予想を確認する。
abstract_source_url: "https://arxiv.org/abs/2006.00756"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2006.00756v3](https://arxiv.org/abs/2006.00756)
- **著者:** Hao Max Sun
- **初回投稿日:** 2020年6月1日
- **最終更新日:** 2021年4月12日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

三次元多様体上のBridgeland安定性条件の構成は、tilt安定対象の第三Chern指標に対するBogomolov–Gieseker型不等式へ還元される。本論文は、接束が半安定でChern類が消える三次元多様体について、この不等式を任意標数で確立する。

対象は代数閉体上の滑らかな射影三次元多様体 $X$ で、$K_X\sim_{\mathrm{num}}0$、$Hc_2(X)=0$、$T_X$ が $\mu_H$-半安定という仮定を置く。標数零では有限étale Abel被覆を通じて既知結果へ帰着するが、正標数ではそのような特徴づけがなく、本結果が新しい内容をもつ。

主不等式からBridgeland安定性条件の存在が従う。さらにReider型のコホモロジー消滅を経由して、$K_X+mH$ の大域生成性とvery amplenessについてFujita予想の境界を得る。

## 背景と問題設定

Bayer–Macrì–Todaの構成では、$\nu_{\alpha,\beta}$-安定対象に対する第三Chern指標の上界が中心となる。元の不等式には一般三次元多様体上で反例があるため、本論文はChern類の消滅と接束の半安定性という構造的仮定のもとで成立を証明する。

## 主結果

### Bogomolov–Gieseker型不等式（Theorem 1.1）

$X$ を代数閉体上の滑らかな射影三次元多様体、$H$ をample因子とする。$K_X\sim_{\mathrm{num}}0$、$Hc_2(X)=0$、$T_X$ が $\mu_H$-半安定であると仮定する。$\nu_{\alpha,\beta}$-安定対象 $E$ が $\nu_{\alpha,\beta}(E)=0$ を満たすならば、

$$
\operatorname{ch}_3^\beta(E)\leq\frac{\alpha^2}{6}H^2\operatorname{ch}_1^\beta(E)
$$

が成り立つ。これは正標数も含み、仮定のもとでBridgeland安定性条件の存在を与える。

### Fujita予想への応用（Corollary 1.4）

Theorem 1.1の状況では、

$$
\mathcal O_X(K_X+mH)\text{ は }m\geq4\text{ で大域生成され、}m\geq5\text{ でvery ampleである。}
$$

この結論は任意標数で成立する。

## 証明の見取り図

正標数 $p$ では、Frobenius写像の反復 $F^n$ による $E$ の引き戻しについてEuler標数 $\chi(\mathcal O_X,(F^n)^*E)$ を計算する。Riemann–Rochによりその主要項は $p^{3n}\operatorname{ch}_3(E)$ である一方、特定の局所自由層のFrobenius順像のtilt安定性からExt群を $O(p^{2n})$ で評価する。$n\to\infty$ として第三Chern指標の不等式を得て、標数零はspreading outで導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2006.00756](https://arxiv.org/abs/2006.00756)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Corollaries 1.2, 1.4, 1.5
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
