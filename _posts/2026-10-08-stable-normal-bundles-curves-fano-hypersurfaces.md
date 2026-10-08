---
layout: paper
title: Holonomy and bundle stability for curves on Fano hypersurfaces
title_ja: Fano超曲面上の曲線の法束安定性と退化上のホロノミー
authors: Ziv Ran
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  For every $n\geq 3, g\geq 1$ and all large enough $e$ depending on $n,g$, there exist curves of genus $g$, degree $e$ in a general hypersurface of degree $n$ in $\mathbb P^n$, or in $\mathbb P^n$ itself, whose whose normal bundle $N$ is stable, as is any sufficiently general full-rank subsheaf of $N$. For $g=1$, $N$ is semi-stable. On general hypersurface of degree $d< n$ in $\mathbb P^n$, such that a certain arithmetical condition on $d,n, g $ holds, there exists an arithmetical progression of $e$ values so that curves of degree $e$ and genus $g$ with semistable normal bundle exist. Previous results were restricted to certain cases with ambient space $\P^n$. A main tool in the proof is an analogue of parallel transport (resp. holonomy) for bundles on a chain (resp. cycle) of rational curves.
topic: algebraic-geometry
tags:
- fano-varieties
- stability
- vector-bundles-sheaves
arxiv_id: 2211.12661v8
arxiv_url: https://arxiv.org/abs/2211.12661v8
arxiv_submitted: '2022-11-23'
arxiv_updated: '2026-10-05'
summary: |-
  射影空間や一般のFano超曲面に、高種数かつ高次数の曲線で法束が安定になるものを構成する。次数が周囲の射影空間の次元より低い超曲面では、算術条件の下で半安定性を得る。法束の傾きが整数の場合に限られていた従来の構成を広げる結果である。
abstract_en: ''
summary_en: |-
  The geometry of a curve inside a projective variety is tested through the stability of its normal bundle. Ran constructs high-degree examples on general Fano hypersurfaces and distinguishes the stronger conclusions in genus at least two from semistability in genus one. Degenerations to nodal configurations supply transport maps whose genericity controls the resulting bundles. For hypersurfaces of lower degree, the available degrees are constrained by an explicit divisibility condition.
abstract_ja: |-
  曲線が周囲の多様体の中でどの方向にも偏らず変形する状況を、法束の安定性によって調べる。Introductionでは、種数が2以上で次数が十分大きい場合、射影空間および次数nの一般超曲面内に法束がhyper-stableな曲線を構成し、種数1では半安定性を示す。次数dがnより小さい超曲面については、種数とd、nの整除条件を仮定し、次数の等差数列に沿って半安定法束を持つ曲線を得る。有理曲線の連鎖・閉路上で平行移動とホロノミーに対応する線形写像を考えることが構成の要点である。
abstract_source_url: https://arxiv.org/abs/2211.12661v8
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2211.12661v8](https://arxiv.org/abs/2211.12661v8)
- **著者:** Ziv Ran
- **初回投稿日:** 2022-11-23
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲線の法束は、周囲の空間の中で曲線をどのように動かせるかを記述する。法束が半安定であるとは、特定の部分束だけが大きな傾きを持たないという条件であり、曲線の埋め込みの均衡を測る。本論文は、射影空間と一般のFano超曲面にこの性質を持つ曲線を構成する。

種数2以上では通常の安定性より強いhyper-stabilityを、種数1では半安定性を示す。一般超曲面の次数が周囲の射影空間の次元より小さい場合には、算術的な仮定の下で次数の等差数列に沿う構成を得る。この場合の結論は半安定性であり、安定性までは主張されていない。

従来の結果には、射影空間の低次元の場合や法束の傾きが整数になる場合に集中するという制約があった。本論文の構成は非整数の傾きも扱う。証明の新しい要素は、退化した有理曲線の閉路上にホロノミーの類似物を導入し、その一般性を束の安定性に結びつける点である。

## 背景と問題設定

<p>
曲線上の束 $E$ の傾きは $\mu(E)=\deg(E)/\operatorname{rk}(E)$ である。任意の部分束 $F$ に対し $\mu(F)\le\mu(E)$ なら半安定である。本論文でhyper-stableとは、任意に固定した有限余長について、十分一般のその余長の部分層が安定になることをいう。以下では複素数体上で考える。
</p>

Introductionは、補間性から半安定性を導く従来の議論が整数傾きの場合に有効である一方、一般の超曲面上の非整数傾きでは結果が乏しかったと説明する。曲線の次数範囲の最適性は今回の主張に含まれない。

## 主結果

### 射影空間と次数nの超曲面（Introductionの定理(i)、(ii)）

<p>
$n\ge3$、$g\ge1$、$e\gg0$ とする。射影空間 $\mathbb P^n$ の一般の種数 $g$・次数 $e$ の曲線は、$g\ge2$ では法束がhyper-stableとなり、$g=1$ では半安定となる。また、制限接束 $T\mathbb P^n|_C$ は $g\ge1$ で半安定である。
</p>

<p>
$\mathbb P^n$ 内の次数 $n$ の一般超曲面にも、同じ種数・次数で法束がこの安定性を持つ曲線が存在する。Introductionはこれらの精密な記述をTheorems 31、34、35に対応づけている。安定性と種数1での半安定性は区別する必要がある。
</p>

### 低次数超曲面と整除条件（Introductionの定理(iii)、Theorem 39への言及）

<p>
次数 $d\lt n$ の一般超曲面では、次の条件の下で、法束が半安定な種数 $g$ の曲線を次数 $e$ の等差数列に沿って構成できる。
</p>

<div>
$$
\gcd\bigl((d-2)(n-d+1),\,d(n-2)\bigr)\mid 2(n-d)(g-1).
$$
</div>

<p>
例えば $g=1$ ではこの整除条件は満たされる。ここでは全ての十分大きな次数で存在するとも、法束が安定になるとも述べていない。この区別が次数 $n$ の場合との相違である。
</p>

### 変形の障害に関する帰結（IntroductionのRemark (ii)）

<p>
半安定な法束を持つ曲線では、次の次数条件の下で $H^1(N_{C/X})=0$ となり、埋め込まれた曲線の変形は障害を持たない。
</p>

<div>
$$
e>\frac{2(n-3)(g-1)}{n+1-d}.
$$
</div>

これは安定性を抽象的な束の性質としてだけでなく、曲線の変形を制御する条件として理解するための帰結である。

## 証明の見取り図

まず種数1の曲線を、二つの有理曲線が二点で交わる配置へ退化させる。各成分に沿う法束のファイバー間の写像を平行移動に見立て、閉路を一周する写像をホロノミーと考える。その一般性から、退化上の束の半安定性を制御する。

<p>
続いて別のfang degenerationを使い、種数に関する帰納法で射影空間の場合を扱う。次数 $n$ の超曲面にはfan-quasi cone degenerationを用いる。より低次数の場合には射影束上で法束の水平成分と垂直成分を分け、楕円曲線を歯とする櫛状曲線の退化を使う。ここで制限接束の半安定性が歯に沿う議論を支える。
</p>

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2211.12661v8
- **Introduction:** Section 0、pp. 2–4。PDFのAbstractはp. 1。
- **主要結果:** Introductionの番号なし定理(i)–(iii)、Theorems 31、34、35、39への言及、Remark (ii)。
- **確認範囲:** 安定性の種数条件はPDF AbstractとIntroductionの $g\ge2$ に従う。公式metadata Abstractは原文のまま保存している。後続の証明全体は検証していない。
- **確認バージョン:** v8。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
