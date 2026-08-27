---
layout: paper
title: "Negative Effective Divisors and Bridgeland Stability of Line Bundles on Surfaces"
title_ja: "負の有効因子と曲面上の直線束のBridgeland安定性"
authors: "Anthony Mäkelä"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a connected smooth complex projective surface. We prove an effective-divisor version of the Arcara--Miles conjecture, together with its strict analogue. For every divisorial Bridgeland stability condition, failure of stability, respectively semistability, of a line bundle or its relevant shift is detected by a natural subobject associated with a non-zero effective Cartier divisor $C$ satisfying $C^2<0$. The proof combines minimal-rank destabilizers, slope Harder--Narasimhan filtrations, the Bogomolov--Gieseker inequality, and an ordered Lorentzian partial-sum estimate that forces the minimal rank to be one. Consequently, strict semistability of a line bundle or its relevant shift is detected by a negative effective divisor, and a numerical semistability condition arising from the twisted deformed Hermitian--Yang--Mills equation is equivalent to stability under all integral scalings.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - positivity
arxiv_id: "2608.26080v1"
arxiv_url: "https://arxiv.org/abs/2608.26080"
arxiv_submitted: "2026-08-26"
arxiv_updated: "2026-08-26"
summary: >-
  滑らかな射影曲面上の直線束またはそのシフトがdivisorial Bridgeland安定性を失うことを、自己交点が負の有効Cartier因子から作る自然な部分対象が検出することを示す。さらにtwisted deformed Hermitian–Yang–Mills方程式に由来する数値的半安定性を、全整数スケールでのBridgeland安定性と同値にする。
abstract_en: ""
summary_en: >-
  This work gives a divisor-detection criterion for instability of line bundles on smooth projective surfaces under standard divisorial Bridgeland stability conditions. Whenever a line bundle, or the shift lying in the tilted heart, fails the appropriate stability property, a natural subobject coming from an effective divisor of negative self-intersection witnesses that failure. The argument reduces a minimal-rank destabilizer to rank one through Harder–Narasimhan data, the Bogomolov–Gieseker inequality, and a Lorentzian estimate. A scaling consequence relates a numerical twisted dHYM condition to Bridgeland stability at every positive integral scale.
abstract_ja: >-
  連結な滑らかな複素射影曲面上で、直線束または傾斜heartに属するそのシフトの不安定性を調べる。安定性または半安定性が破れるなら、自己交点 $C^2<0$ の非零有効Cartier因子から得る自然な部分対象が位相不等式を検出する。最小rankの不安定化対象、Harder–Narasimhanフィルトレーション、Bogomolov–Gieseker不等式、Lorentz型評価を組み合わせる。応用として、twisted dHYMの数値的半安定性と全正整数スケールでの安定性の同値を得る。
abstract_source_url: "https://arxiv.org/abs/2608.26080"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.26080](https://arxiv.org/abs/2608.26080)
- **著者:** Anthony Mäkelä
- **初回投稿日・最終更新日:** 2026年8月26日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標準的なdivisorial安定性条件 $\sigma_{B,\omega}$ の下で、直線束 $L$ または傾斜heartに入る $L[1]$ の不安定化をどの幾何学的対象が担うかを問う。Arcara–Miles予想は、負の自己交点をもつ曲線に付随する対象だけで検出できると予想していた。

本論文は「曲線」を非零有効Cartier因子と解釈した形で、安定性と半安定性の双方について必要十分な検出定理を証明する。検出因子は既約とは限らず、任意に与えた不安定化部分対象そのものを分類する主張でもない点が重要である。

さらに、twisted deformed Hermitian–Yang–Mills方程式から生じる曲線上の数値条件が、$(B,\omega,L)$ の全正整数倍におけるBridgeland安定性と同値になる。固定スケールで両概念が一致しない場合がある一方、全スケールという条件が正確な橋渡しを与える。

## 背景と問題設定

$L$ に対して $s=\omega\cdot(c_1(L)-B)$ と置くと、$s>0$ では $L$、$s\le0$ では $L[1]$ が傾斜heartに属する。有効因子 $C$ から前者では $L(-C)\subset L$、後者では $L(C)|_C\subset L[1]$ という自然な候補が得られる。

## 主結果

### 検出定理（Theorem 1.1）

$s>0$ のとき $L$ が安定でないことは、ある非零有効Cartier因子 $C$ が

$$
C^2<0,\qquad s-\omega\cdot C>0,
$$

および $\arg Z_{B,\omega}(L(-C))\ge\arg Z_{B,\omega}(L)$ を満たすことと同値である。半安定でない場合には最後の不等式が狭義になる。$s\le0$ では対応して

$$
C^2<0,\qquad s+\omega\cdot C\le0
$$

と $L(C)|_C$ の位相比較が必要十分条件になる。

### dHYMとの対応（Corollary 1.5）

$\alpha=c_1(L)-B$ とし、既約曲線 $C$ に

$$
\Psi_C(\alpha,\omega)=(C\cdot\omega)(\omega^2-\alpha^2)+2(C\cdot\alpha)(\alpha\cdot\omega)
$$

を定める。全曲線で $\Psi_C\ge0$ となる数値的twisted dHYM半安定性は、すべての $k\ge1$ について $L^{\otimes k}$ が $\sigma_{kB,k\omega}$-安定であることと同値である。

## 証明の見取り図

$L^{-1}$ をtensorして構造層へ還元し、正rank最小の不安定化部分対象を選ぶ。そのHarder–Narasimhan因子をLorentz空間の順序付きベクトルへ写し、Bogomolov–Gieseker不等式と部分和評価を用いる。rankが2以上なら、より小rankの因子的部分対象が厳密に不安定化して最小性に反するため、rank 1となる。shift側は導来双対性で処理する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.26080](https://arxiv.org/abs/2608.26080)
- **Introduction:** Section 1, pp. 1–6
- **主要結果:** Theorem 1.1; Corollaries 1.3–1.5
- **論文構成:** p. 6
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
