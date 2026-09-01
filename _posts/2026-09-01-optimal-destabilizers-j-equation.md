---
layout: paper
title: "Finiteness and rigidity of optimal destabilizing subvarieties for the J-equation"
title_ja: "J方程式に対する最適不安定化部分多様体の有限性と剛性"
authors: "P. Sivaram, Zakarias Sjöström Dyrefelt"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.AP
arxiv_abstract: >-
  We prove that when the J-equation does not admit a smooth solution, there is always only a finite number of obstructing optimally destabilizing curves and divisors on compact Kähler manifolds of any dimension. For threefolds, this establishes the unconditional finiteness of all optimally destabilizing subvarieties. We moreover characterize the union of these optimal subvarieties, proving that they are contained in the locus where a natural continuity path loses local smooth compactness. Finally, to address subvarieties that are neither curves nor divisors, we prove a rigidity criterion which prevents optimal cycles from moving in compact one-parameter families, with further consequences for their deformation and symmetry properties.
topic: differential-geometry
tags:
  - positivity
  - csck-extremal-kahler-metrics
  - monge-ampere-equations
arxiv_id: "2608.31122v1"
arxiv_url: "https://arxiv.org/abs/2608.31122"
arxiv_submitted: "2026-08-31"
arxiv_updated: "2026-08-31"
summary: >-
  J方程式が解をもたないコンパクトKähler多様体で、最適に不安定化する曲線と因子が常に有限個であることを示す。最適不安定化軌跡を連続法の局所滑らかなコンパクト性が失われる場所と結び付け、中間次元のサイクルにはコンパクトな1パラメータ族で動くことを妨げる数値的剛性条件を与える。
abstract_en: ""
summary_en: >-
  The work examines the subvarieties that realize the strongest numerical obstruction to solving the J-equation. It proves unconditional finiteness for optimal curves and divisors, and hence for all proper subvarieties on a Kähler threefold. The optimal locus is linked both to a fixed analytic upper-level set and to degeneration of a continuity path. A quantitative nef-threshold condition also rules out compact moving families of optimal cycles.
abstract_ja: >-
  コンパクトKähler多様体上でJ方程式に滑らかな解が存在しないとき、障害となる最適不安定化曲線と因子は有限個しかない。したがって三次元では、最適不安定化部分多様体全体の有限性が無条件に従う。さらに、それらの合併は自然な連続法が局所的な滑らかなコンパクト性を失う軌跡に含まれ、中間次元の最適サイクルにはコンパクトな1パラメータ族内で動けないことを保証する剛性判定条件が得られる。
abstract_source_url: "https://arxiv.org/abs/2608.31122"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.31122](https://arxiv.org/abs/2608.31122)
- **著者:** P. Sivaram, Zakarias Sjöström Dyrefelt
- **初回投稿日:** 2026-08-31
- **最終更新日:** 2026-08-31
- **主分類・副分類:** math.DG（主分類）, math.AG, math.AP
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

J方程式はKähler類 $\alpha,\beta$ に対し、$\omega_\varphi\in\alpha$ が

$$
\operatorname{tr}_{\omega_\varphi}\chi=c_{\alpha,\beta},\qquad c_{\alpha,\beta}=n\frac{\beta\cdot\alpha^{n-1}}{\alpha^n}
$$

を満たすことを求める。解の存在は部分多様体上の交叉不等式と結び付き、不安定領域ではどの部分多様体が最強の障害を与えるかが問題となる。

本論文は、安定性閾値の下限を達成する「最適不安定化」部分多様体を調べる。任意次元で最適曲線と最適因子が有限個であり、三次元ではこれが全ての真部分多様体の有限性を与える。

さらに、最適軌跡全体を一つのKählerカレントのLelong数上位集合へ収め、連続法の解が局所的に滑らかに収束できない場所にも含まれることを示す。中間次元については完全な有限性の代わりに、nef閾値による定量条件の下で最適サイクルがコンパクトな族内を動けないという剛性を得る。

## 背景と問題設定

安定性閾値 $\Gamma^{\mathrm{pp}}_\beta(\alpha)$ は、各次元の真部分多様体に対する数値的余裕の下限である。値が非正で下限を達成する部分多様体が最適不安定化部分多様体である。従来の有限性結果には正値性仮定が必要であり、全最適軌跡が固定された真解析集合に入るかも自明ではなかった。

## 主結果

### 最適軌跡の解析的包絡（Theorem 1.1）

$\Gamma^{\mathrm{pp}}_\beta(\alpha)\leq0$ なら、$T_{\mathrm{mc}}\in\alpha$ と $\delta_0>0$ が存在し、最適軌跡は

$$
D^{\mathrm{opt}}_{\alpha,\beta}\subset E_{\delta_0}(T_{\mathrm{mc}})=\{x\in X:\nu(T_{\mathrm{mc}},x)\geq\delta_0\}
$$

を満たす。右辺は固定された真解析集合である。

### 連続法の退化（Theorem 1.2）

アフィン経路 $\beta_t=(1-t)\frac{c}{n}\alpha+t\beta$ が境界へ近づくとき、最適軌跡の各点で解の局所滑らかなコンパクト性が失われる。

### 曲線と因子の有限性（Theorem 1.3, Corollary 1.5）

任意のコンパクトKähler多様体で最適不安定化曲線と因子は有限個である。特にKähler三次元多様体では、全ての最適不安定化真部分多様体が有限個となる。

### 動くサイクルを排除する剛性（Theorem 1.6）

Introductionに明記されたnef閾値 $s_\alpha(\beta)$ の定量的不等式の下で、$p$ 次元最適部分多様体は非定数なコンパクト1パラメータ解析族をなさない。この結果は中間次元で未解決の有限性を剛性の形で補う。

## 証明の見取り図

質量集中で構成した補助KählerカレントのSiu上位集合へ最適軌跡を収め、解析集合の有限個の既約成分を使って曲線・因子の有限性へ進む。曲線には非Kähler軌跡の議論も併用する。連続法については、ある最適部分多様体の点で滑らかな収束があれば極限が対応する数値的不等式と矛盾する。剛性定理では、動く族の交叉数とnef閾値を比較して数値条件に反することを導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.31122](https://arxiv.org/abs/2608.31122)
- **Introduction:** Introduction, pp. 1–5
- **Introduction中で言及された主要定理番号:** 本文の主結果各小節に記載
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
