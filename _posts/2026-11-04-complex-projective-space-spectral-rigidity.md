---
layout: paper
title: A proof of the spectral rigidity for complex projective space
title_ja: 一つのHodgeスペクトルによる複素射影空間の剛性
authors: Kefeng Liu, Hao Xu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We give a proof of a folklore conjecture that a compact K\"ahler manifold with the same scalar Laplace spectrum as complex projective space equipped with the Fubini--Study metric is holomorphically isometric to it. More generally, we prove that the spectrum of the Hodge Laplacian in any one fixed degree $p$ determines $\CP^n$ up to holomorphic isometry among compact connected K\"ahler manifolds, for every fixed pair of integers $(p,n)$ with $0\leq p\leq n$. Equality of a single Hodge spectrum first forces periodic geodesic flow and the integral cohomology ring of complex projective space. The ordinary first heat coefficient then identifies the total scalar curvature except on a Pell sequence of pairs. For those pairs, a clean wave-trace argument, a Krawtchouk estimate, and a mod-two projective-bundle obstruction determine the geodesic return holonomy. A canonical K\"ahler involution recovers a weighted first heat coefficient which is nonzero throughout the exceptional sequence.
  The Kobayashi--Ochiai theorem and a fixed-class second-heat-coefficient calculation complete the argument.
topic: differential-geometry
tags:
- curvature
- hodge-theory
- uniformization
- chern-classes
arxiv_id: 2611.03536v1
arxiv_url: https://arxiv.org/abs/2611.03536
arxiv_submitted: '2026-11-02'
arxiv_updated: '2026-11-02'
summary: コンパクト連結Kähler多様体が、ある一つの次数でFubini–Study複素射影空間とHodge Laplacianのスペクトルを共有すれば、正則等長同型になると主張する。全スペクトルから得る測地流と位相の情報を、熱係数およびKähler曲率恒等式へ結びつける。通常の第一熱係数が消える例外にも重み付き係数を用いる。
abstract_en: ''
summary_en: The asserted rigidity theorem uses the spectrum of the Hodge Laplacian in just one fixed degree. Its hypothesis ranges over compact connected Kähler manifolds and compares multiplicities with a Fubini–Study projective space. The proposed proof extracts periodic geodesic flow and integral cohomology before applying heat invariants. Exceptional degrees where the usual scalar-curvature coefficient vanishes require a separate weighted spectral argument; the function-spectrum case avoids that branch of the proof.
abstract_ja: Fubini–Study計量をもつ複素射影空間を、一つの次数のHodgeスペクトルから特徴づける問題を扱う。著者らは、重複度を含むスペクトルの一致がコンパクト連結Kähler多様体の正則等長同型を導くとする。高エネルギーのスペクトルの算術性から測地流の周期性と整数コホモロジーを得て、熱係数から第一Chern類と曲率を特定する。例外的な整数対では、波動トレースとKähler involutionによる重み付き熱係数で不足を補う。
abstract_source_url: https://arxiv.org/abs/2611.03536
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.03536v1](https://arxiv.org/abs/2611.03536)
- **著者:** Kefeng Liu, Hao Xu
- **初回投稿日:** 2026-11-02
- **最終更新日:** 2026-11-02
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

同じLaplacianスペクトルをもつ多様体が必ず等長とは限らない。その一方で、基準となる空間が複素射影空間であり、比較相手をKähler多様体に限る場合には、スペクトルが幾何をどこまで決めるかという剛性問題が生じる。

本論文は、ある一つの固定次数$p$のHodge Laplacianについて、Fubini–Study計量と重複度込みでスペクトルが一致すれば、正則等長同型が得られるという定理を掲げる。複数次数のスペクトルを同時に指定する必要はない。

証明の入口は、少数の熱係数だけを比較する方法ではない。著者らは全スペクトルの高エネルギーにおける算術的な振る舞いから測地流の周期性を取り出し、それを整数コホモロジーとKähler類の特定へつなげる。

通常の第一熱係数から全スカラー曲率を読み取れない例外的な整数対には、別の重み付き不変量を使う。最終的には複素構造とKähler類を同定した上で、第二熱係数と曲率恒等式から計量を固定する。本記事はAbstractとIntroductionに基づく主張の紹介であり、この全証明を検証したものではない。

## 背景と問題設定

実$p$形式上の非負Hodge Laplacianを$\Delta\_p=d\delta+\delta d$とする。モデルの正則断面曲率を4に正規化し、超平面類を$h$とすると、

$$
[\omega\_0]=\pi h,\qquad\operatorname{Vol}(\mathbb{CP}^n)=\frac{\pi^n}{n!},\qquad s\_0=4n(n+1)
$$

となる。$s$はRiemannスカラー曲率である。熱展開を

$$
\operatorname{Tr}(e^{-t\Delta\_p})\sim(4\pi t)^{-n}\sum\_{j\geq0}a\_{j,p}t^j
$$

と書けば、$a\_{0,p}=\binom{2n}{p}\operatorname{Vol}(M)$であり、スペクトルは次元と体積を決める。困難は、その先で複素構造と計量全体を決めることである。

## 主結果

### 固定次数のスペクトル剛性（Theorem 1）

整数$0\leq p\leq n$を固定する。境界のないコンパクト連結Kähler多様体$(M,g,J)$が、Fubini–Study計量$g\_0$に対して

$$
\operatorname{Spec}\_p(M,g)=\operatorname{Spec}\_p(\mathbb{CP}^n,g\_0)
$$

を重複度込みで満たすならば、$(M,g,J)$は$(\mathbb{CP}^n,g\_0,J\_0)$と正則等長同型になる、というのが主定理である。$p=0$は関数上のLaplacianのスペクトルに対応し、$n=0$は一点の場合である。

例外的な次数の問題は、

$$
q=p^2-2np+\frac{n(2n-1)}3
$$

という量で整理される。$q\ne0$では通常の第一熱係数が全スカラー曲率を決める。$q=0$の整数対はPell型の列をなし、この係数が恒等的に消えるため追加の議論を要する。これらは証明方法の例外であって、主定理の反例として挙げられているのではない。

## 証明の見取り図

Introductionは四段階を説明する。第一に、Fubini–Studyの固有値列の高エネルギー挙動から波動作用素のある時刻での差がコンパクトになることを導き、Egorovの定理で全測地線の帰還を得る。閉測地線の理論とKähler類を使って

$$
\pi\_1(M)=0,\qquad H^\ast(M;\mathbb Z)=\mathbb Z[x]/(x^{n+1}),\qquad[\omega]=\pi x
$$

へ進むという構成である。

第二に$c\_1(M)=kx$とおくと、スカラー曲率の積分との対応は

$$
\operatorname{Vol}(M)^{-1}\int\_Ms\thinspace dV=4nk
$$

となる。$q\ne0$ならば第一熱係数から$k=n+1$を得て、Kobayashi–Ochiaiの最大指数定理で複素多様体を射影空間と同定する。

第三に$q=0$では、短い周期での波動トレース、外積表現のholonomy character、Krawtchouk評価、射影束上のmod-two障害を用いる。これらをLaplacianと可換なKähler involutionに結びつけ、消えない重み付き第一熱係数を回復する。

最後に、複素構造とKähler類を固定した状態でApteの恒等式を第二熱係数へ代入する。残るスカラー曲率の分散の係数が$\binom{2n}{p}/60>0$となり、分散が零になる。さらに跡なしRicci成分とBochner成分も消えることから、正則断面曲率4の計量を得る。

関数スペクトル$p=0$の場合には$1/6$という非零の第一熱係数の乗数があり、例外列に対する第三段階は不要である。ただし、この場合でも第一段階で全スペクトルを使うので、最初の三つの熱係数だけから全結論が従うという主張ではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.03536)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.03536v1) — Section 1, pp. 1–3（Section 2以降の証明は精読していない）
- **Introduction中で言及された主要結果:** Theorem 1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.03536v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
