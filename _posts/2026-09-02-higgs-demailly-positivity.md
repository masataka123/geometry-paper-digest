---
layout: paper
title: "Higgs-Demailly System and Positivity of Higgs Bundles"
title_ja: "Higgs–Demailly系とHiggs束の正値性"
authors: "Liangdi Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that the Higgs-Demailly system on a compact Riemann surface admits a smooth admissible solution at its terminal parameter if and only if the Higgs bundle is H-ample. This gives an independent analytic characterization of H-ampleness by Griffiths-positive Hitchin-Simpson curvature. The proof extends the Demailly-Pingali-Murakami approach using a priori estimates and Leray-Schauder degree theory. The missing scalar lower bound follows from a Higgs-compatible quotient construction: a blow-up sequence produces a nonzero Higgs quotient of nonpositive degree, contradicting H-ampleness.
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - higgs-nonabelian-hodge
arxiv_id: "2609.00556v1"
arxiv_url: "https://arxiv.org/abs/2609.00556"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  コンパクトRiemann面上のHiggs束について、Higgs–Demailly系が終端パラメータで滑らかなadmissible解をもつこと、Griffiths正のHitchin–Simpson曲率をもつこと、H-ampleであることの同値性を証明する。Higgs場と両立する商束構成により、Demailly–Pingali–Murakami法に欠けていたスカラー下界を得る。
abstract_en: ""
summary_en: >-
  The paper gives an analytic criterion for numerical positivity of Higgs bundles on compact Riemann surfaces. It proves that H-ampleness is equivalent both to positive Hitchin–Simpson curvature and to terminal solvability of a coupled Higgs–Demailly system. The continuity argument requires a scalar lower bound that does not follow from the ordinary bundle case. A normalized blow-up sequence instead yields a Higgs-invariant quotient of nonpositive degree, contradicting the quotient criterion for H-ampleness.
abstract_ja: >-
  コンパクトRiemann面上のHiggs–Demailly系が終端パラメータで滑らかなadmissible解をもつことと、Higgs束がH-ampleであることが同値だと示す。これによりH-amplenessをGriffiths正のHitchin–Simpson曲率で特徴づける独立な解析的証明を与える。証明ではa priori評価とLeray–Schauder次数理論を拡張し、blow-up列から非正次数の非零Higgs商を構成してH-amplenessとの矛盾を導く。
abstract_source_url: "https://arxiv.org/abs/2609.00556"
license_name: "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-nd/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.00556](https://arxiv.org/abs/2609.00556)
- **著者:** Liangdi Zhang
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

正則ベクトル束の代数的正値性と曲率正値性を結ぶGriffiths予想には、Higgs束版がある。曲線上ではH-amplenessは束自身とすべての非零Higgs商束の次数の正値性で判定できるため、解析的方程式との対応を精密に問える。

本論文はDemaillyの非線形Hermitian–Yang–Mills系をHiggs束へ拡張する。終端パラメータのadmissibilityはHitchin–Simpson曲率のGriffiths正値性そのものであり、系の可解性をH-amplenessと同値にする。

単に既知のprescribed curvature定理を適用するのではなく、行列式部分とtrace-free部分が結合した特定の系を解く点が新しい。Higgs交換子は計量変分や最大固有値評価を変え、極限で得る商も正則商だけでなくHiggs商でなければならない。

曲線という仮定は本質的である。Hitchin–Simpson曲率がそのKähler形式による縮約で決まり、弱いHiggs射影が実際のHiggs部分束・商束を与えるため、商束の次数を用いた矛盾が可能になる。

## 背景と問題設定

Hermitian計量 $h$ に対するHitchin–Simpson接続と曲率を

$$
D_h=\nabla_h+\theta+\theta_h^*,\qquad R^{D_h}=D_h^2
$$

とする。基準計量に対し $h_t=e^{-f_t}g_th_{\mathrm{ref}}$、$\det g_t=1$ と書くと、扱うHiggs–Demailly系は

$$
\begin{cases}
\det\!\left(\sqrt{-1}\Lambda_\omega R^{D_{h_t}}+(1-t)\alpha\operatorname{Id}_E\right)=e^{\lambda f_t}a_0,\\
\sqrt{-1}\Lambda_\omega (R^{D_{h_t}})_0=-e^{f_t}\log g_t
\end{cases}
$$

である。括弧内が正である解をadmissibleと呼ぶ。

## 主結果

### H-amplenessの解析的特徴づけ（Theorem 1.1）

$(M,\omega)$ を連結コンパクトRiemann面、$(E,\theta)$ を正の階数のHiggs束とする。Introductionに指定された基準計量と十分大きい $\alpha,\lambda$ を選ぶと、次は同値である。

1. Higgs–Demailly系が $t=1$ で滑らかなadmissible解をもつ。
2. $(E,\theta)$ がGriffiths正のHitchin–Simpson曲率をもつHermitian計量を許容する。
3. $(E,\theta)$ がH-ampleである。

$\theta=0$ では通常のベクトル束のamplenessとGriffiths正値性に戻る。非自明なHiggs場を含め、特定の連続法の終端可解性まで同値に含める点が主張の中心である。

## 証明の見取り図

まず摂動Higgs Hermitian–Einstein方程式から初期解を作り、$t=0$ で一意性と非退化性を得る。連続路に沿って $e^f|\log g|$、$|\Delta_\omega^Cf|$、$\operatorname{osc}_Mf$ を一様に評価し、残る $f$ の下界をLeray–Schauder法へ供給する。

下界が破れると仮定し、$g$ の最大固有値で正規化したblow-up列を取る。Simpson–Uhlenbeck–Yau型のspectral cutoffを商側で行うと、非正次数の非零Higgs商が生じる。これはH-amplenessの数値的商判定に矛盾する。Higgs交換子から現れる非負energy項が、極限商のHiggs不変性と必要な符号を保証する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.00556](https://arxiv.org/abs/2609.00556)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem 1.1; Remark 1.2
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction
