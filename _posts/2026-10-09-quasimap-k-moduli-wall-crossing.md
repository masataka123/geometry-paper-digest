---
layout: paper
title: K-moduli wall crossing for quasimaps to a projective variety
title_ja: 射影多様体へのquasimapのKモジュライと壁越え
authors: Masafumi Hattori, Yota Maeda
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.NT
arxiv_abstract: We develop a modular wall crossing theory for quasimaps to a projective variety, allowing independent variation of the boundary coefficients and the quasimap weight. Building on the K-stability of quasimaps introduced by Hashizume and the first author, we construct projective moduli spaces in the stable, Calabi--Yau, and log Fano regimes, together with wall crossing morphisms. A central construction is the moduli theory of boundary polarized Calabi--Yau quasimaps, which retains an ample polarization at the numerically trivial locus and allows comparison with suitable perturbations toward the stable and log Fano regions. The stable theory applies in arbitrary genus, while the comparisons through the Calabi--Yau locus concern genus zero. For degree-one boundary divisors, the resulting framework relates weighted stable maps and quasimaps to Hassett spaces and GIT quotients of weighted points on $\mathbb P^1$. In a companion paper, we apply this framework to give a modular interpolation
  between Miranda's GIT compactification of rational elliptic surfaces and the Baily--Borel compactification of an eight-dimensional ball quotient.
topic: algebraic-geometry
tags:
- k-stability
- moduli
- calabi-yau-geometry
- birational-geometry
arxiv_id: 2610.10784v1
arxiv_url: https://arxiv.org/abs/2610.10784
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: 境界因子の係数とquasimapの重みを独立に動かすモジュライ理論を構成する。種数0では数値的に自明なCalabi–Yauの壁にも偏極を残すことで、stable側とlog Fano側の空間を比較する。比較射に一般には半正規化が必要となる点も含め、既存の重み付き写像・点配置の理論を結ぶ。
abstract_en: ''
summary_en: The adjoint divisor of a weighted quasimap can move from positive degree to negative degree as its weights change. Hattori and Maeda construct moduli spaces on both sides and retain a separate polarization when the total degree is zero. This makes the intervening Calabi–Yau locus usable for comparison morphisms, generally after seminormalization. The stable construction allows arbitrary genus, whereas the comparison through the zero-degree wall concerns rational source curves.
abstract_ja: 固定した射影多様体へのquasimapについて、複数の境界因子とquasimap自体に重みを付けた射影的モジュライ空間を構成する。随伴因子が豊富、数値的に自明、反豊富となる三つの領域で、それぞれの安定性と壁越え射を記述する。Calabi–Yauの壁では境界とquasimapの寄与の一部を豊富な偏極として指定することが中心となる。stable領域は任意の種数を扱い、Calabi–Yauの壁を介した比較は種数0で行われる。
abstract_source_url: https://arxiv.org/abs/2610.10784
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** K-moduli wall crossing for quasimaps to a projective variety
- **著者:** Masafumi Hattori, Yota Maeda
- **arXiv:** [2610.10784v1](https://arxiv.org/abs/2610.10784)
- **初回投稿日 / 更新日:** 2026-10-07 / 2026-10-07
- **主分類:** math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)。著作権は原著者等の権利者に帰属する。

## 要約

写像のモジュライをコンパクト化するとき、極限で余分な曲線成分を残す方法と、成分を収縮して基点として情報を保持するquasimapの方法がある。本論文は、境界因子の重みとquasimapの重みを同時に動かし、これらの空間を比較する理論を構成する。

中心的な問題は、安定性を支配する随伴因子が数値的に自明になる壁である。その因子だけでは偏極を失うため、著者らは境界とquasimapの寄与を二つに分け、一方を豊富な偏極として保持する。このboundary polarized Calabi–Yau quasimapが、stable側とlog Fano側をつなぐ中間対象となる。

主張は単なる集合の対応ではない。射影的なcoarseまたはgood moduli space、重み空間のchamber分解、族と基底変換に適合する射を構成する。一般の比較では半正規化を経るという制限も明示される。

## 背景と問題設定

<p>閉埋め込み $\iota:X\hookrightarrow\mathbb P^N$ を固定し、節点曲線 $C$ から $[\operatorname{Cone}(X)/\mathbb G_m]$ へのquasimapを考える。境界因子 $D_j$ の次数を $d_j$、係数を $a_j\in[0,1]$、quasimapの線束を $L_q$、その次数を $d$、重みを $w\ge0$ とする。随伴因子は</p>

<div>
$$
A_{\vec a,w}=K_C+\sum_j a_jD_j+wL_q
$$
</div>

<p>である。この因子が豊富ならstable領域、反豊富ならlog Fano領域となる。境界は標点だけでなく、所定の次数を持つ相対的な有効因子を許す。重みが0になったデータは忘れる規約である。</p>

## 主結果

### 主定理1：stable領域（Theorem 1.1）

<p>算術種数を $p_a$ とし、$2p_a-2+\sum_j a_jd_j+wd>0$ とする。固定した数値データに対するweighted stable quasimapのモジュライは固有なDeligne–Mumfordスタックをなし、射影的なcoarse moduli spaceを持つ。</p>

<p>境界係数とquasimap重みを減らす方向には標準的なreduction射がある。この部分は任意の種数に適用される。$w>1$ ではsemi-log-canonical条件により基点が排除され、標点を境界に選ぶと重み付きstable mapの理論を回復する。</p>

### 主定理2：log Fano領域（Theorem 1.2）

<p>$p_a=0$、$\sum_j a_jd_j+wd\lt2$ の下で、K-semistable log Fano quasimapをパラメータ化する有限型Artinスタックと、射影的good moduli spaceが存在する。</p>

<p>重み空間には有限な有理多面体分解があり、ある面の相対的内部からその面上の点へ移るときに標準的な壁越え射がある。移動前後で境界係数がすべて正、かつquasimap重みがともに非零なら、スタックの射は開埋め込みとなる。有理重みではCM線束が豊富な $\mathbb Q$-線束としてモジュライ空間へ降下する。</p>

### 主定理3：偏極を保持したCalabi–Yauの壁（Theorem 1.3）

<p>種数0でデータを二つに分け、次の条件を課す。</p>

<div>
$$
K_C+\vec a_1\cdot\vec D_1+\vec a_2\cdot\vec D_2+(w_1+w_2)L_q\equiv0,
\qquad
\vec a_2\cdot\vec D_2+w_2L_q\ \text{が豊富}.
$$
</div>

<p>このboundary polarized CY quasimapの有限型Artinスタックは射影的good moduli spaceを持つ。有理重みで $w_1+w_2\le1$ の場合、自然なHodge線束が豊富な $\mathbb Q$-線束として降下する。数値的自明性を保つ重み空間にも有限な有理多面体分解とreduction射がある。</p>

### 主定理4：stable側とlog Fano側の比較（Theorem 1.4）

<p>十分小さい $\epsilon>0$ に対し、境界係数と全quasimap重みをともに $1-\epsilon$ 倍するとlog Fanoデータとなり、そのスタックはCYスタックへ開埋め込みされる。good moduli spaceの半正規化は同型になる。</p>

<p>逆に、偏極を与える第二の部分だけを $1+\epsilon$ 倍するとstable側のスタックからCYスタックへの開埋め込みが得られる。その結果、半正規化後のstableモジュライからlog Fano Kモジュライへの標準的な射が存在する。標的が射影空間で埋め込みが恒等写像の場合は、半正規化なしで比較射を定義できるとIntroductionで補足される。</p>

## 証明の見取り図

stable領域では、壁上の随伴因子の次数が0になる有理成分を相対線形系で収縮する。quasimap重みが正なら、収縮された有理tailの次数は基点の重複度として残す。Kollárのdivisorial supportを用いて境界を相対Mumford因子として押し下げ、切断の比から新しい線束とquasimapを作る。非被約な基底を含む基底変換との適合性が重要である。

log Fano領域では元の曲線を収縮せず、K-semistabilityを表す有限個の線形不等式から壁越えを構成する。CY領域ではこの二つの方法を組み合わせる。有理楕円曲面の二つのコンパクト化への応用は、同著者らの別論文に委ねられている。

## 原論文との対応

- **Abstractページ:** [2610.10784](https://arxiv.org/abs/2610.10784)
- **PDF:** [2610.10784v1](https://arxiv.org/pdf/2610.10784v1)
- **Introduction:** Section 1, pp. 1–7
- **主要結果:** Theorems 1.1–1.4; Introduction 1.4の構成方針
- **確認バージョン:** 2610.10784v1
- **確認ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
