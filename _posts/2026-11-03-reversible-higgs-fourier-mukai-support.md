---
layout: paper
title: Reversible Higgs Bundles
title_ja: 可逆Higgs束とFourier–Mukai変換の台
authors: Krishnendu Gongopadhyay, Tathagata Nayak
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math-ph
- math.DG
- math.MP
arxiv_abstract: 'We study reversible Higgs bundles on a compact Riemann surface $\Sigma$ of genus $g\geq 2$, that is, $G$-Higgs bundles $(E,\Phi)$ with $(E,\Phi)\cong(E,-\Phi)$. For a complex reductive group $G$ realized as a self-adjoint subgroup of $GL(n,\mathbb{C})$, we show that if $(E,\Phi)$ corresponds to a representation $\rho$ of $\pi_1(\Sigma)$, then $(E,-\Phi)$ corresponds to $(\overline{\rho}^{\,t})^{-1}$. As a consequence, the moduli space of reversible Higgs bundles is the fixed locus of an involution of the character variety and carries the structure of a real affine algebraic set. For a connected semisimple group and every topological type, we prove that the reversible locus in the smooth moduli space is a $(B,A,A)$-brane. We then describe reversibility through spectral data: in even rank, for a smooth spectral curve, reversible Higgs bundles correspond to line bundles invariant under the involution $\eta\mapsto-\eta$; in odd rank, under natural genericity assumptions for
  which the spectral curve is nodal, we give a gluing criterion together with an explicit polystability condition. Finally, for $SL(2n,\mathbb{C})$ we construct a relative Fourier--Mukai transform over the regular locus of the Hitchin base and prove that it maps the structure sheaf of the reversible locus to an object whose support is exactly the regular degree-zero $PSp(2n,\mathbb{C})$-locus in the Langlands dual $PGL(2n,\mathbb{C})$-moduli space. This support is of type $(B,B,B)$.'
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- moduli
- vector-bundles-sheaves
- hyperkahler-geometry
arxiv_id: 2610.19037v2
arxiv_url: https://arxiv.org/abs/2610.19037
arxiv_submitted: '2026-10-13'
arxiv_updated: '2026-10-30'
summary: Higgs場の符号反転で同型類が変わらない可逆Higgs束を、表現とスペクトルデータで記述する。SL(2n)の正則Hitchin領域上で、可逆軌跡の構造層のFourier–Mukai変換の台を次数零PSp(2n)モジュライと同定する。
abstract_en: ''
summary_en: The paper follows the sign-change symmetry of a Higgs field through several descriptions of its moduli space. Spectral line bundles make the fixed locus accessible, including gluing conditions in odd rank. The principal result computes the support of a relative Fourier–Mukai transform for a Langlands dual pair. Its scope is the regular Hitchin locus and the support of the transformed object, rather than a complete construction of every proposed mirror datum.
abstract_ja: 可逆Higgs束とは、Higgs場を負にしても同型な束である。非可換Hodge対応を通じた表現論的な特徴づけ、滑らかなモジュライ上の(B,A,A)性、偶数・奇数階数でのスペクトル的条件を与える。主結果はSL(2n)とPGL(2n)の双対Hitchin系に対するもので、正則領域上の相対Fourier–Mukai変換の台が次数零PSp(2n)軌跡に一致し、(B,B,B)型となる。
abstract_source_url: https://arxiv.org/abs/2610.19037
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.19037v2](https://arxiv.org/abs/2610.19037)
- **著者:** Krishnendu Gongopadhyay, Tathagata Nayak
- **初回投稿日:** 2026-10-13
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; math-ph, math.DG, math.MP
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

種数2以上のコンパクトRiemann面上で、Higgs場の符号を反転しても同型類が変わらない束を可逆と呼ぶ。本論文はこの対称性を、基本群表現、超Kähler幾何、スペクトル曲線の線束という異なる記述を通して調べる。

主結果は、可逆軌跡の構造層に相対Fourier–Mukai変換を施し、その台を具体的な別の群のHiggsモジュライとして決定する。ファイバーごとの双対性という直観を、Hitchin基底の正則領域全体での導来圏の対象として実現する点に重点がある。

この結果はmirrorの台に関する部分を証明する。特異スペクトル曲線を含む全モジュライへの拡張や、予想されたmirrorのすべての付加構造までを同時に確定するものではない。

## 背景と問題設定

種数 $g\geq2$ の曲面 $\Sigma$ 上の、多重安定で有理特性類が消える $G$-Higgs束を考える。可逆性は

$$
(E,\Phi)\simeq(E,-\Phi)
$$

で定義される。非可換Hodge対応で表現の空間と対応し、滑らかな部分は複素構造 $J\_1,J\_2,J\_3$ を持つ超Kähler空間となる。

## 主結果

### 変換の台の同定（Theorem 5.1）

$SL(2n,\mathbb C)$ と $PGL(2n,\mathbb C)$ の共通Hitchin基底のうち、スペクトル曲線が滑らかな部分を $A\_{\mathrm{reg}}$ とする。正則モジュライを $X$、双対側の位相的に自明な成分を $\widehat X$ と書く。正規化された相対Poincaré線束による変換 $\Psi$ と、可逆軌跡の構造層を $X$ へ押し出した $E\_{\mathrm{global}}$ に対し、

$$
\operatorname{Supp}\Psi(E\_{\mathrm{global}})
=e\bigl(\mathcal M\_{\mathrm{reg}}^0(PSp(2n,\mathbb C))\bigr)
$$

が成り立つ。$e$ は構造群の拡大による閉埋め込みである。この台は3つの複素構造すべてで複素部分多様体となり、$(B,B,B)$ 型を持つ。台はtheta characteristicの選び方に依存しない。

### 表現と固定点集合（Theorems 2.1, 2.3）

$G$ を共役転置で保たれる複素簡約群として実現すると、$(E,\Phi)$ に対応する表現 $\rho$ に対し、$(E,-\Phi)$ は

$$
\theta\circ\rho,\qquad\theta(A)=(\overline A^{\thinspace t})^{-1}
$$

に対応する。従って可逆モジュライは指標多様体の反正則な対合の固定点集合として捉えられ、実アフィン代数集合の構造を持つ。

### 滑らかな軌跡のbrane型（Theorem 3.1）

連結半単純群と各位相型に対し、滑らかなモジュライ内の可逆軌跡は $J\_1$ について複素的で、$\omega\_2,\omega\_3$ についてLagrange的である。これが $(B,A,A)$ 型という主張であり、特異点を含む全空間が滑らかな部分多様体だとする主張ではない。

### スペクトルデータ（Theorems 4.1, 4.3）

偶数階数でスペクトル曲線が滑らかなら、可逆性はその線束が $L\simeq\sigma^\ast L$、$\sigma(\eta)=-\eta$ を満たすことに対応する。

奇数階数 $2m+1$ では、零切断 $Z$ と滑らかな残りの曲線 $S'$ が横断的な節点で交わり、スペクトル層が局所自由である設定を扱う。線束 $L,L'$ と節点の貼り合わせに対し、

$$
|2m\deg L-\deg L'|<2m(2m+1)(g-1)
$$

という多重安定性条件に加え、$\alpha:L'\to\sigma^\ast L'$ が存在して各節点で $\alpha(x\_i)=1$ となることを要求する。単なる $L'\simeq\sigma^\ast L'$ より強い条件である。

## 証明の見取り図

偶数の正則ファイバーでは、可逆部分をPrym多様体上の対合の固定部分群として記述する。その単位成分のannihilatorがFourier–Mukai変換の台となり、norm写像を通じてPSpファイバーと同定する。

大域化では可逆軌跡の構造層が基底全体に平坦でない点が難しい。まず偶数基底上へ構成を制限して平坦性を確保し、導来基底変換でファイバー計算をつなぐ。この手順により正則基底全体で台を同定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.19037)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.19037v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 2.1, 2.3, 3.1, 4.1, 4.3, 5.1（Introductionで説明された主張）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.19037v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
