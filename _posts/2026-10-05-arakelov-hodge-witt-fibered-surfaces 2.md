---
layout: paper
title: Arakelov inequalities for fibered surfaces in positive characteristic
title_ja: Hodge Witt曲面上の正標数Arakelov不等式
authors: Hao Max Sun, Wan-Yuan Xu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  Let $f:S\to C$ be a relatively minimal semistable fibration of genus $g\ge2$ over an algebraically closed field of characteristic $p>0$ with smooth and geometrically connected generic fiber. Let $Σ\subset C$ denote the set of points over which the fibers are singular, with $s=|Σ|$. If the total surface $S$ is Hodge Witt and $s\ge2$, we prove the classical Arakelov inequality $$
    \text{deg}\, f_*ω_{S/C}\le \frac g2 \text{deg}\, Ω_C^1(\logΣ), $$ where $ω_{S/C}$ denotes the relative dualizing sheaf. For $C=\mathbb P^1$, we obtain the stronger estimate $$
    \text{deg}\, f_*ω_{S/\mathbb P^1}\le \frac g2(s-2)-\frac12 b_1(S), $$ where $b_1(S)$ is the first Betti number of $S$. We also construct a genus-$2$ semistable fibration over $\mathbb P^1$ with exactly $4$ singular fibers in characteristic $5$. Its total surface is Hodge Witt, and $$
    \text{deg}\, f_*ω_{S/\mathbb P^1}=2=\frac g2(s-2). $$ Thus Nguyen's lower bound $s\ge4$ and the Hodge--Witt Arakelov inequality are both sharp. As applications, we derive a canonical-class inequality and a Szpiro-type inequality with coefficients linear in $g$.
topic: algebraic-geometry
tags:
- positive-characteristic
- hodge-theory
- vector-bundles-sheaves
- moduli
arxiv_id: 2610.02760v1
arxiv_url: https://arxiv.org/abs/2610.02760
arxiv_submitted: '2026-10-02'
arxiv_updated: '2026-10-02'
summary: |-
  正標数の半安定曲面ファイブレーションについて、全空間がHodge Wittで特異ファイバーが2本以上なら、古典的係数 $g/2$ のArakelov不等式を回復する。底が射影直線の場合にはBetti数を含む強い評価を与える。標数5で特異ファイバーが4本の種数2の例を構成し、評価の鋭さも示す。
abstract_en: ''
summary_en: |-
  The paper seeks an intrinsic replacement for lifting assumptions in positive-characteristic Arakelov bounds. A Hodge–Witt condition removes the crystalline correction that otherwise enlarges the estimate. Over the projective line, the first Betti number supplies an additional improvement. An explicit characteristic-five example attains equality and has only four singular fibers.
abstract_ja: |-
  正標数の代数閉体上で、滑らかで幾何的に連結な種数 $g\ge2$ の一般ファイバーを持つ相対極小半安定ファイブレーションを扱う。全曲面のHodge Witt性により相対双対化層の直像の次数に古典的なArakelov上界を与え、射影直線上では第一Betti数を使って強める。さらに標数5の有理曲面から、特異ファイバーがちょうど4本の鋭い例を得る。
abstract_source_url: https://arxiv.org/abs/2610.02760
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.02760v1](https://arxiv.org/abs/2610.02760)
- **著者:** Hao Max Sun, Wan-Yuan Xu
- **初回投稿日:** 2026-10-02
- **最終更新日:** 2026-10-02
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲線の族の複雑さを測るArakelov不等式は、底曲線と特異ファイバーの数からHodge束の次数を抑える。標数零では古典的係数 $g/2$ が現れるが、正標数では同じ係数を得るために持ち上げ可能性などの追加条件が必要であった。

本論文は、全空間の曲面がHodge Wittであるという内在的な条件を使い、古典的係数を回復する。底が射影直線の場合には第一Betti数の分だけ上界を下げる。一般の評価に現れる正標数特有の補正項を明示し、それが消える理由を説明する点にも特徴がある。

さらに標数5において、特異ファイバーがちょうど4本の種数2の非等自明半安定ファイブレーションを構成する。この例はArakelov不等式の等号を達成し、正標数での特異ファイバー数の下界の鋭さも示す。標数零の結論を単に形式的に移した結果ではない。

## 背景と問題設定

代数閉体 $k$ の標数を $p>0$ とし、滑らかな射影曲面から滑らかな射影曲線への相対極小半安定ファイブレーション $f:S\to C$ を考える。幾何的な一般ファイバーは滑らかで連結、種数は $g\ge2$ とする。$b=g(C)$、特異ファイバーの像を $\Sigma$、$s=|\Sigma|$ と置く。

古典的な評価は $\deg f_*\omega_{S/C}\le\frac g2(2b-2+s)$ である。Introductionは、正標数の一般的な既知の評価では係数が $g^2$ などとなること、持ち上げ仮定の下では古典的係数が得られていたことを説明する。Hodge Witt性はordinary性より弱く、$p_g(S)=0$ なら自動的に成立する条件として位置付けられている。

## 主結果

### 主定理1：古典的係数の回復（Theorem 1.2）

上記の仮定に加え $S$ がHodge Wittかつ $s\ge2$ なら、

\lt div>
$$
\deg f_*\omega_{S/C}\le\frac g2\deg\Omega_C^1(\log\Sigma)
=\frac g2(2b-2+s)
$$
\lt /div>

が成り立つ。基礎体の標数を零に持ち上げる仮定に代え、全曲面のコホモロジーの条件から同じ係数を導く。

### 主定理2：射影直線上での改善（Theorem 1.4）

$f:S\to\mathbb P^1$ がさらに非等自明であり、$S$ がHodge Wittなら、

\lt div>
$$
\deg f_*\omega_{S/\mathbb P^1}
\le\frac g2(s-2)-\frac12b_1(S)
\le\frac g2(s-2)
$$
\lt /div>

となる。第一Betti数 $b_1(S)$ による減少分を保持した、より強い上界である。この場合の特異ファイバー数の必要な下界は、Introductionが引用するNguyenの定理で確保される。

### 主定理3：標数5での等号例（Theorem 1.5）

標数5の代数閉体上には、相対極小・非等自明・半安定で種数2の $f:S\to\mathbb P^1$ が存在し、特異ファイバーは $0,1,3,\infty$ 上のちょうど4本である。$S$ は有理曲面で、

\lt div>
$$
\deg f_*\omega_{S/\mathbb P^1}=2,\qquad
K_{S/\mathbb P^1}^2=4,\qquad \delta_f=20
$$
\lt /div>

を満たす。$\delta_f$ は特異ファイバーの節点数を表す量である。とくに $S$ はHodge Wittで、$\deg f_*\omega_{S/\mathbb P^1}=\frac g2(s-2)$ が成立する。

### 相対標準類への応用

Introductionは、Hodge Witt仮定の下での帰結として

\lt div>
$$
K_{S/C}^2\le6g(2b-2+s)
$$
\lt /div>

を挙げる。種数に対して線形の係数が得られ、$g\ge3$ では、非零のKodaira–Spencer類を仮定する従来のSzpiro評価の係数 $4g(g-1)$ より小さい。ただし両結果の仮定は同一ではない。

## 証明の見取り図

出発点は、一般の半安定ファイブレーションに対する精密化

\lt div>
$$
\deg f_*\omega_{S/C}\le\frac g2(2b-2+s)
+T^{0,2}(S)+\frac12(r_f-G_f)
$$
</div>

である。$T^{0,2}(S)$ はdomino numberで、$r_f-G_f$ は特異ファイバーの相対Albanese幾何から来る補正である。Introductionではこれらの役割を説明しており、細部の定義をここで推測して補わない。

crystalline cohomologyのslope numberの下界と特異ファイバー上の因子類を組み合わせてこの評価を得る。Hodge Witt性で $T^{0,2}(S)=0$、$s\ge2$ でAlbanese補正が非正となり、主定理1が従う。等号例には、Saitoに由来しNguyenが再掲した種数2のpencilを標数5へ還元する構成を使う。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.02760)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.02760v1)、Section 1, pp. 1–4。
- **Introduction中で言及された主要結果:** Theorems 1.2・1.4・1.5、式 (1)–(5)。
- **論文構成の説明:** Section 1末尾, p. 4。
- **確認したarXivバージョン:** 2610.02760v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
