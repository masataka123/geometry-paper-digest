---
layout: paper
title: Approximation and extension theorems for normal affine toric varieties
title_ja: 正規アフィントーリック多様体への正則写像の近似・拡張と同時実現の障害
authors: Ryo Uchimoto
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: We study approximation and extension problems for holomorphic maps from Stein spaces to normal affine toric varieties, continuing the work of L\"ark\"ang and L\'arusson. Normality allows us to obtain twisted factorizations for arbitrary holomorphic maps from factorial complex spaces, including degenerate maps. This yields approximation and extension theorems under weaker cohomological assumptions. We also prove a simultaneous approximation and extension theorem under an additional codimension condition on the inverse image of the singular locus and a cohomological condition on the union of the interpolation submanifold and the approximation set. Finally, an explicit example with target $\{w^2=uv\}\cong\mathbb{C}^2/\{\pm1\}$ shows that simultaneous approximation and extension can fail even when the relevant cohomological obstructions vanish. Thus normality alone does not recover the full approximation and interpolation property of Oka manifolds.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
- toric-geometry
- complex-analytic-spaces
arxiv_id: 2610.22926v1
arxiv_url: https://arxiv.org/abs/2610.22926
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: 正規アフィントーリック多様体を標的とする正則写像の近似と拡張を、捻れた因子分解を用いて研究する。個別の近似・拡張定理を弱いコホモロジー条件で示し、特異点の逆像に関する余次元条件の下で同時実現を得る一方、その条件を外すと同時近似・補間が失敗する例を与える。
abstract_en: ''
summary_en: Normal affine toric targets allow holomorphic maps to be described by twisted factorizations even when the image misses the dense torus. This yields separate approximation and extension results under weaker cohomological assumptions. A compatibility condition involving the inverse image of the singular locus makes simultaneous approximation and interpolation possible. A counterexample shows that vanishing of the relevant cohomological obstructions alone is insufficient for the simultaneous problem.
abstract_ja: Stein空間から正規アフィントーリック多様体への正則写像について、近似と拡張を研究する。正規性により退化した写像にも捻れた因子分解を構成でき、次数1・2のコホモロジーの全射性の下で個別の近似・拡張定理を得る。同時近似・補間には、特異点集合の逆像が余次元2以上であることと、補間集合と近似集合の和に対するコホモロジー条件を用いる。二次錐への写像の例ではコホモロジー障害が消えていても同時問題が失敗し、正規性だけではOka多様体と同じ柔軟性を回復できないことを示す。
abstract_source_url: https://arxiv.org/abs/2610.22926
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.22926v1](https://arxiv.org/abs/2610.22926)
- **著者:** Ryo Uchimoto
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体では、Stein空間上の正則写像の近似と補間が強く結びついている。しかし標的に特異点があると、近似ができることと拡張ができること、さらに両者を同時にできることは別の問題になる。本論文は正規アフィントーリック多様体を用いて、この違いを具体的に調べる。

正規性の利点は、写像の像が稠密トーラスに入らない退化した場合にも、線束の切断を使う捻れた因子分解を構成できることである。その結果、従来必要だった零次コホモロジーの条件を外し、次数1と2の条件で近似と拡張をそれぞれ行える。

同時実現では二つの場所の因子分解の整合性が新たな課題となる。特異点の逆像に対する余次元条件を課すとこれを制御できるが、その条件なしでは二次錐に値を取る写像ですら同時近似・補間が失敗する。従って、正規な特異標的をOka多様体と同じに扱うことはできない。

## 背景と問題設定

複素空間がfactorialであるとは、各局所環が一意分解整域であることをいう。複素多様体はこの条件を満たす。トーリック標的への写像が非退化であるとは、始域の各既約成分の像が標的の稠密トーラスと交わることをいう。

Lärkäng–Lárussonによる先行研究は、一般のアフィントーリック標的に対し、$H^q(X,\mathbb Z)\to H^q(X',\mathbb Z)$ が $q=0,1,2$ で全射なら閉factorial部分空間上の写像が拡張することを示した。IntroductionのTheorem 1.1はこの既知の結果であり、本論文の新しい拡張定理と区別される。

## 主結果

### 弱いコホモロジー条件での拡張（Theorem 1.2）

$Y$ を正規アフィントーリック多様体、$X'$ を被約Stein空間 $X$ の閉factorial部分空間とする。

$$
H^q(X,\mathbb Z)\longrightarrow H^q(X',\mathbb Z)\quad(q=1,2)
$$

が全射なら、任意の正則写像 $X'\to Y$ は $X\to Y$ に正則拡張する。標的の正規性を用いることで、先行結果の $q=0$ の条件を除いている。

### Runge開集合からの近似（Theorem 1.3）

factorial Stein空間 $X$ のStein Runge開集合を $\Omega$ とする。$q=1,2$ について $H^q(X,\mathbb Z)\to H^q(\Omega,\mathbb Z)$ が全射なら、任意の正則写像 $\Omega\to Y$ を、$\Omega$ のコンパクト集合上一様に大域的正則写像 $X\to Y$ で近似できる。

### 同時近似・補間（Theorem 1.4）

$X$ はStein多様体、$X'\subset X$ は閉複素部分多様体、$K$ は正則凸コンパクト集合とする。連続写像 $f:X\to Y$ が $X'$ 上および $K$ の近傍 $U$ で正則であると仮定する。さらに重なり $X'\cap U$ 上で $f$ が非退化で、

$$
\operatorname{codim}\_{X'\cap U}f^{-1}(Y\_{\mathrm{sing}})\ge2,\qquad
H^2(X,\mathbb Z)\longrightarrow\check H^2(X'\cup K,\mathbb Z)\text{ が全射}
$$

なら、正則写像列 $F\_j:X\to Y$ が存在し、$F\_j|\_{X'}=f|\_{X'}$ を保ちながら $K$ 上一様に $f$ に収束する。各 $F\_j$ へ至るホモトピーも補間を固定し、$K$ の近傍で正則で、ホモトピーパラメータについて一様な近似を保つ。

右辺はČechコホモロジーである。$X'\cup K$ は局所可縮とは限らないため、特異コホモロジーと自動的に同一視しないことがIntroductionで強調される。

### 正規性だけでは不十分な反例

Introductionは $X=\mathbb C^3$、$X'=\mathbb C^2\times\lbrace 0\rbrace $、適切な多項式凸polydisc $K$ と、

$$
Y=\lbrace (u,v,w)\in\mathbb C^3:w^2=uv\rbrace \cong\mathbb C^2/\lbrace \pm1\rbrace
$$

を用いるExample 4.4を説明する。関連するコホモロジー障害が消え、$X'$ 上の写像単独には大域正則拡張があっても、$K$ 上の近似と同時には実現できない。この反例はTheorem 1.4の余次元条件を無条件に除けないことを示す。

## 証明の見取り図

正規性を利用して、退化した写像も標的に共通のデータによる捻れた因子分解に持ち込む。線束の拡張とトーラス因子の障害をコホモロジー条件で処理することで、個別の拡張・近似を得る。同時問題では、特異点の逆像の余次元条件から重なり上の因子分解の同型を除く一意性を得て、補間側と近似側のデータを適合させる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.22926)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.22926v1) — Section 1, pp. 1–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3, 1.4、Introduction中のExample 4.4の説明（Theorem 1.1は先行結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.22926v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
