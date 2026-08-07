---
layout: paper
title: "Foliations, slope stability, and positivity of log canonical bundles on Deligne-Mumford stacks"
title_ja: "Deligne--Mumfordスタック上の葉層・傾き安定性・対数標準束の正値性"
authors: "Sebastian Casalaina-Martin, Shend Zhjeqi"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.26443v1"
arxiv_url: "https://arxiv.org/abs/2605.26443v1"
arxiv_submitted: "2026-05-26"
arxiv_updated: "2026-05-26"
summary: >-
  Campana--Păunによる対数余接束の傾きと対数標準束の正値性の結果を、projective coarse moduli spaceを持つ滑らかなproper Deligne--Mumfordスタックへ拡張する。正の傾きを持つ葉層の代数性を確立し、bigなViehweg--Zuo型部分層から対数標準因子のbignessを導く。
abstract_en: ""
summary_en: >-
  The paper extends positivity results for logarithmic cotangent bundles from smooth projective varieties to smooth proper Deligne--Mumford stacks with projective coarse moduli spaces. A key step proves that a foliation whose nonzero quotients have positive slope with respect to a movable class is algebraic in this stack setting. This allows the authors to show that a big-determinant subsheaf in a tensor power of the logarithmic cotangent bundle forces pseudoeffectivity for quotient first Chern classes. As a consequence, the logarithmic canonical divisor is big, providing tools intended for hyperbolicity questions on moduli stacks.
abstract_ja: >-
  滑らかな射影多様体に対するCampana--Păunの葉層・傾き安定性・対数標準束の正値性に関する結果を、projective coarse moduli spaceを持つ滑らかなproper Deligne--Mumfordスタックへ一般化する。これはPopa--SchnellとWei--WuのViehweg hyperbolicityの議論をDMスタック、とくに一部のKSBAモジュライ空間へ拡張する一連の研究の一部である。
abstract_source_url: "https://arxiv.org/abs/2605.26443v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.26443v1](https://arxiv.org/abs/2605.26443v1)
- **著者:** Sebastian Casalaina-Martin, Shend Zhjeqi
- **初回投稿日・最終更新日:** 2026年5月26日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Campana--Păunの正値性定理は、対数余接束のtensor powerにbigな行列式を持つ部分層があれば、対数標準因子もbigになるという、Viehweg hyperbolicityの重要な機構を与える。本論文はこの機構を、有限群商に限らない滑らかなproper Deligne--Mumford（DM）スタックへ移す。

主定理は、$\Omega^1_{\mathcal X}(\log\Delta)$ の正のtensor powerにbig determinantを持つ部分層があるとき、その任意の正のtensor powerのtorsion-free quotientの第1 Chern類がpseudo-effectiveになると述べる。行列式を取れば $K_{\mathcal X}+\Delta$ のbignessが従う。

証明の中心的な独立結果は、movable類に関してすべての非零商の傾きが正である葉層が代数的であることだ。解析的な葉の族のZariski閉包が期待次元を持つことを傾きと漸近Riemann--Rochで示し、葉を一般fiberとする有理写像を構成する。

この拡張は、projective varietyではないモジュライスタック上でViehweg--Zuo sheafを直接使うための基盤として位置づけられる。具体的なKSBAモジュライへの応用は今後の研究であり、本論文の証明済み結果とは区別されている。

## 背景と問題設定

$\mathcal X$ をprojective coarse moduli spaceを持つ滑らかなproper integral DM stack、$\Delta$ をnormal crossingの被約因子とする。通常の多様体の場合は、big determinantを持つ

$$
\mathcal A\subset \bigl(\Omega^1_X(\log\Delta)\bigr)^{\otimes N}
$$

から対数標準因子の正値性が導かれる。スタックの場合には、movable類、傾き安定性、葉層の代数性、相対標準因子の擬有効性を同じ一般性で用意する必要がある。

## 主結果

### 対数余接束の商の正値性（Theorem A）

ある $N>0$ について $\bigl(\Omega^1_{\mathcal X}(\log\Delta)\bigr)^{\otimes N}$ がbig determinantを持つ部分層を含むとする。このとき、任意の正のtensor powerの任意のtorsion-free coherent quotient $\mathcal Q$ に対し、$c_1(\mathcal Q)$ はpseudo-effectiveである。

### 対数標準因子のbigness（Corollary B）

Theorem Aと同じ仮定の下で

$$
K_{\mathcal X}+\Delta
$$

はbigである。これはTheorem Aで商の行列式を調べることから得られる、論文が主要な応用として強調する系である。

### 正傾き葉層の代数性（Theorem C）

$\mathcal F\subset T_{\mathcal X}$ を葉層とし、あるmovable類 $\alpha\in N_1(\mathcal X)_{\mathbf R}$ に関して $\mathcal F$ のすべての非零商層が正の $\alpha$-slopeを持つとする。このとき $\mathcal F$ は代数的であり、一般の葉は滑らかな射影多様体への有理写像のfiberとして実現される。

## 証明の見取り図

Theorem Aを反証法で考えると、pseudo-effectiveでない商から双対化とHarder--Narasimhan型の傾き議論により正傾きの葉層 $\mathcal F$ が得られる。Theorem Cでは解析的な葉の族を $\mathcal X^{\mathrm{an}}\times\mathcal X^{\mathrm{an}}$ に置き、そのZariski閉包を取る。傾きに基づく切断消滅と漸近Riemann--Rochにより閉包の次元が $\dim\mathcal X+\operatorname{rk}\mathcal F$ であることを示し、Chow varietyを介して葉をfiberとする有理写像を作る。

その後、相対対数標準因子 $K_{\mathcal X/Z}+\Delta_{\mathrm{hor}}+R(p)$ を調べる。直接の傾き計算はこれを非擬有効とする一方、一般fiberへの帰納とcoarse moduli space上の正値性結果は擬有効性を与え、矛盾する。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.26443v1](https://arxiv.org/abs/2605.26443v1)
- **Introduction:** pp. 1–3（番号なし）
- **主要結果:** Theorem A, Corollary B, Theorem C
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
