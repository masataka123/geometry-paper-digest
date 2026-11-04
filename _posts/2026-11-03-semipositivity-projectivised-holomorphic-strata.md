---
layout: paper
title: Semipositivity and complete subvarieties of projectivised strata of holomorphic differentials
title_ja: 正則微分の射影化層における完全部分多様体の数値障害
authors: Scott Mullane
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We show that if the projectivised stratum $\mathbb{P}{H}_g(\mu)$ associated to a partition $\mu=(m_1,\ldots,m_n)$ of $2g-2$ contains a complete curve, then \[ \kappa_\mu:=\sum_{i=1}^n\frac{m_i(m_i+2)}{m_i+1}>12. \] The weak inequality follows from semipositivity applied to a quotient of the Hodge bundle, while equality is excluded using the second Fujita decomposition and the geometry of fibred surfaces with maximal unitary rank. Consequently, no projectivised holomorphic stratum in genus $g\leq5$ contains a positive-dimensional complete subvariety. In genus $g=6$ the same conclusion holds for \[ (10),\ (9,1),\ (8,2),\ (8,1,1),\ (7,3),\ (6,4),\ (5,5). \]
topic: algebraic-geometry
tags:
- positivity
- hodge-theory
- moduli
arxiv_id: 2610.41287v1
arxiv_url: https://arxiv.org/abs/2610.41287
arxiv_submitted: '2026-10-30'
arxiv_updated: '2026-10-30'
summary: 正則1形式の零点次数を固定した射影化モジュライ層に、完全曲線が存在できる条件を調べる。Hodge束の半正値性とFujita分解から厳密な数値不等式を得て、種数5以下などで正次元完全部分多様体の不存在を示す。
abstract_en: ''
summary_en: 'The article studies compact algebraic subvarieties inside projectivized strata of differentials. A numerical quantity attached to the zero orders must exceed a sharp threshold if a complete curve exists. The strictness requires more than nefness: the equality case is ruled out through the unitary part of the Hodge bundle. This yields new nonexistence results without asserting that all the affected strata are affine.'
abstract_ja: 正則微分の零点の分割μに対する射影化層が完全曲線を含むなら、零点次数から定まる数κμは12より大きい。この弱い不等式はHodge束の商の半正値性から従い、等号はFujita分解と曲面ファイブレーションの既知結果を使って除外される。その結果、種数5以下のすべての射影化正則層と、種数6の特定の分割について正次元完全部分多様体が存在しない。
abstract_source_url: https://arxiv.org/abs/2610.41287
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.41287v1](https://arxiv.org/abs/2610.41287)
- **著者:** Scott Mullane
- **初回投稿日:** 2026-10-30
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

種数 $g$ の曲線と、その上の正則1形式の零点次数を固定して得られる層を考える。微分を定数倍まで同一視した射影化層に完全曲線が存在するかは、射影化しない場合とは異なる問題となる。

本論文は、零点の分割だけから計算される数 $\kappa\_\mu$ によって、完全曲線の存在を制限する。完全曲線が存在すれば $\kappa\_\mu>12$ でなければならない。半正値性が与える弱い不等式の等号を除く点が重要である。

その帰結として、種数5以下ではすべての射影化正則層が正次元完全部分多様体を持たない。既知のアフィン性から従う例を含む一方、主層など新たな例にも届く。不存在から層のアフィン性そのものを結論することはできない。

## 背景と問題設定

$g\geq2$ とし、$\mu=(m\_1,\ldots,m\_n)$ は各 $m\_i>0$ の $2g-2$ の分割とする。$\mathbb PH\_g(\mu)$ は零点をラベル付けした正則微分をスカラー倍まで記録する。有限写像で零点の順序を忘れても、完全な部分多様体の存在という問題は変わらない。

零点次数に対して

$$
\kappa\_\mu=\sum\_{i=1}^n\frac{m\_i(m\_i+2)}{m\_i+1}
=2g-2+n-\sum\_{i=1}^n\frac1{m\_i+1}
$$

を定める。射影化しない層で知られた不存在証明はスケーリング方向を利用するため、射影化層にはそのまま適用できない。

## 主結果

### 完全曲線の厳密な数値障害（Theorem 1.1）

$\mathbb PH\_g(\mu)$ が完全曲線を含むなら

$$
\kappa\_\mu>12
$$

が成り立つ。従って $\kappa\_\mu\leq12$ の場合、正次元完全部分多様体は存在しない。これは十分条件ではなく必要条件であり、$\kappa\_\mu>12$ なら完全曲線が存在するとは主張しない。

### 低種数での不存在（Corollary 1.2）

$g\leq5$ のすべての射影化正則層には正次元完全部分多様体が存在しない。$g=6$ でも、

$$
\mu=(10),(9,1),(8,2),(8,1,1),(7,3),(6,4),(5,5)
$$

について同じ結論を得る。特に種数5の主層 $\mu=(1^8)$ は $\kappa\_\mu=12$ であり、等号の除外が必要な例である。

## 証明の見取り図

仮定した完全曲線を正規化し有限基底変換を行うと、滑らかな曲線族 $f:X\to B$ とHodge束 $E=f\_\ast \omega\_f$、指定された微分が生成する線部分束 $L\subset E$ を得る。標準的なtautological関係は

$$
12\deg E=\kappa\_\mu\deg L,\qquad \deg L>0
$$

となる。Fujitaの半正値性から商 $E/L$ はnefなので、まず $\kappa\_\mu\geq12$ が従う。

等号の場合、$E/L$ は次数零となる。第2Fujita分解 $E=A\oplus U$ の豊富部分 $A$ からこの商への写像は零となり、unitary flat部分 $U$ の階数が $g-1$ になる。序論が参照する最大unitary階数を持つ曲面ファイブレーションの結果と、滑らかで非等自明な族であることが矛盾する。これにより弱い不等式を厳密化する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.41287)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.41287v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.41287v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
