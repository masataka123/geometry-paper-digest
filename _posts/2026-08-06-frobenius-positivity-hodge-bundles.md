---
layout: paper
title: "Frobenius type positivity of Hodge bundles and applications"
title_ja: "Hodge束のFrobenius型正値性とその応用"
authors: "Hao Max Sun"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2606.23203v1"
arxiv_url: "https://arxiv.org/abs/2606.23203v1"
arxiv_submitted: "2026-06-22"
arxiv_updated: "2026-06-22"
summary: >-
  標数0の層に、一般の正標数還元と反復Frobenius引き戻しで測る新しい正値性を導入する。半安定射のHodge束が従来のnef性より強い性質をもち、消滅定理、Chern指標の非負性、Fano多様体の像、曲線族のslope不等式へ応用できることを示す。
abstract_en: ""
summary_en: >-
  The paper introduces positivity and semipositivity conditions for coherent sheaves by testing fixed iterates of Frobenius after reduction to positive characteristic. For semistable morphisms, higher direct images of the relative canonical bundle satisfy a new form of global-generation semipositivity that is stronger than standard nefness. The framework yields vanishing and Chern-character inequalities and is applied to images of Fano varieties and slope inequalities for families of curves.
abstract_ja: >-
  一般の正標数還元上で固定回数のFrobenius引き戻しを調べることにより、整合層の $F^t$-ample、$F^tGG$-ampleと対応する半正値性を定義する。半安定射のHodge束に $F^1GG$-半正値性を証明し、従来の半正値定理を強める。そこから上位Chern指標の非負性、消滅定理、Fano多様体の像や曲線族のslope不等式への応用を得る。
abstract_source_url: "https://arxiv.org/abs/2606.23203v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.23203v1](https://arxiv.org/abs/2606.23203v1)
- **著者:** Hao Max Sun
- **初回投稿日:** 2026年6月22日
- **最終更新日:** 2026年6月22日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射 $f:X\to Y$ に付随する $R^if_*\omega_{X/Y}$ などのHodge束の正値性は、双有理幾何、moduli、Hodge理論を結ぶ。従来、滑らかな射に対するGriffiths・Nakano半正値性や、半安定族に対するnef性・弱正値性が知られていた。

本論文は、標数0の層を正標数へ一般に還元し、固定した $t$ 回のFrobenius引き戻しによるコホモロジー消滅または大域生成で $F^t$-正値性を測る。これらは通常のample性・nef性より強く、引き戻し、制限、tensor積に対してよく振る舞う。

中心的成果は、半安定射のHodge束に $F^1GG$-半正値性を与えることにある。これを消滅定理とChern指標の数値的非負性へつなぎ、さらに半安定射によるFano多様体の像と曲線族のslope不等式を扱う。

## 背景と問題設定

$F^t$-ample性は、一般の正標数還元 $Y_p$ 上で任意の局所自由層 $\mathcal F_p$ に対し

$$
H^i\!\left(Y_p,\mathcal F_p\otimes(F^t_{Y_p})^*\mathcal E_p\right)=0\qquad(i>0)
$$

を要求する。$F^tGG$-ample性では同じtensor積の大域生成を要求し、半正値版では十分正のtwistを許す。Introductionは、局所自由な $F^tGG$-半正値層はnefであり、弱い版でも弱正値になると説明する。

## 主結果

### 半安定射のHodge束（Theorem 1.1）

複素滑らかな射影多様体間の半安定射 $f:X\to Y$ と $X$ 上のample線束 $L$ に対し、任意の $i\geq0$ で $R^if_*\omega_{X/Y}$ は $F^1GG$-半正値であり、$f_*(\omega_{X/Y}\otimes L)$ は $F^1GG$-ampleである。従って前者はnef、後者はampleまたは零である。

### toric底上のHodge束（Theorem 1.3; Corollary 1.4）

$Y$ がtoricで $f$ が滑らかなら、全ての $i,j\geq0$ について $R^jf_*\Omega^i_{X/Y}$ は $F^1$-半正値となる。特にample線束 $L$ と閉部分多様体 $D\subset Y$（$\dim D=e$）について

$$
H^b(Y,\Omega_Y^a\otimes R^jf_*\Omega^i_{X/Y}\otimes L)=0\quad(b>0),
$$

$$
D\cdot\operatorname{ch}_e(R^jf_*\Omega^i_{X/Y})\geq0
$$

を得る。

### Fano像とslope不等式（Theorems 1.7 and 1.8）

半安定な全射 $f:X\to Y$ について、$-K_X$ がampleなら $-K_Y$ もample、$-K_X$ がsemiampleなら $-K_Y$ はpseudo-effectiveである。また一般fiberが種数 $g$ の滑らかな曲線で、$\dim X=n$、$K_X$ がnef、$\Omega_Y^1$ が $F^1$-半正値なら

$$
K_X^n\geq 2n!\left(\frac{g-1}{g+n-2}\right)\operatorname{ch}_{n-1}(f_*\omega_X)
$$

が成立する。

## 証明の見取り図

Hodge束の主結果には、Deligne--Illusie型の方法と相対de Rham複体のIllusie分解を用いる。Gauss--Manin系を係数とする対数de Rham複体も使い、正標数還元でのFrobenius作用を大域生成・消滅へ移す。こうして得た半正値性を、論文前半で構築する消滅定理とChern指標不等式へ入力する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.23203v1](https://arxiv.org/abs/2606.23203v1)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.5, 1.7, 1.8; Corollaries 1.2, 1.4, 1.6
- **論文構成の説明:** p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
