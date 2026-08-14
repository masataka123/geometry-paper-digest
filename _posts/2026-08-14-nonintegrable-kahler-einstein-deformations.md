---
layout: paper
title: "A negative Kähler-Einstein threefold with non-integrable infinitesimal Einstein deformations"
title_ja: "非可積分な無限小 Einstein 変形をもつ負 Kähler–Einstein 三次元多様体"
authors: "Ari Krishna"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
arxiv_id: "2608.13481v1"
arxiv_url: "https://arxiv.org/abs/2608.13481"
arxiv_submitted: "2026-08-13"
arxiv_updated: "2026-08-13"
summary: >-
  負の Kähler–Einstein 計量に対する無限小 Einstein 変形が、実際の Einstein 計量の曲線へ積分できるかを問う。著者は、積でない標準偏極三次元多様体を構成し、その8実次元の無限小変形空間のうち厳密に6次元だけが可積分で、残る方向は三次 Einstein 次数で障害を受けることを示す。
abstract_en: >-
  We construct a smooth canonically polarized threefold, not biholomorphic to a product of positive-dimensional varieties, whose normalized Kähler-Einstein metric admits a non-integrable infinitesimal Einstein deformation. The same tangent direction is non-integrable as an infinitesimal complex deformation. In fact, the space of infinitesimal Einstein deformations in our example has real dimension 8, its integrable directions form a real 6-dimensional subspace, and every direction outside that subspace is obstructed. This answers both parts of a suitably generalized version of a question posed by Dai, Wang, and Wei in real dimension 6.
summary_en: ""
abstract_ja: >-
  滑らかな標準偏極三次元多様体で、正規化された負の Kähler–Einstein 計量が非可積分な無限小 Einstein 変形をもつ例を構成する。同じ接方向は複素構造の無限小変形としても非可積分である。この例の無限小 Einstein 変形空間は実8次元で、可積分方向は実6次元部分空間をなし、その外のすべての方向が障害を受ける。多様体そのものは正次元多様体の積ではなく、実次元6における Dai–Wang–Wei の問いの一般化された二つの側面へ肯定的な例を与える。
abstract_source_url: "https://arxiv.org/abs/2608.13481"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.13481](https://arxiv.org/abs/2608.13481)
- **著者:** Ari Krishna
- **初回投稿日・最終更新日:** 2026年8月13日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler–Einstein 多様体では、複素構造の無限小変形は $H^1(X,T_X)$ で記述される。一方、無限小 Einstein 変形とは線形化 Einstein 作用素の横断跡なし核であり、それが実際の Einstein 計量の曲線の接ベクトルになるとき可積分という。負 Einstein 定数の場合、Koiso の同型が両空間を結ぶが、複素変形の障害が Einstein 変形にも最後まで残るかは自明でない。

本論文は、標準束が ample な滑らかな射影三次元多様体 $X$ と $\operatorname{Ric}g=-g$ を満たす計量を構成する。$X$ は有限 étale 被覆では積になるものの、自身は正次元多様体の積ではないため、積から直ちに得られる退化例を避けている。

中心となる変形類 $\alpha_X$ は $[\alpha_X,\alpha_X]\ne0$ という一次 Kodaira–Spencer 障害をもつ。したがって複素変形として非可積分であり、Nagy の三次 Einstein 方程式を介して、対応する無限小 Einstein 変形も三次で障害を受ける。

さらに全変形空間を分解し、可積分方向を完全に同定する。これにより単に一つの反例を与えるだけでなく、非可積分方向が変形空間のどこに位置するかまで示している。

## 背景と問題設定

Dai–Wang–Wei と Schwahn–Semmelmann の問いは、実次元4以外の負曲率 Kähler–Einstein 多様体に非可積分な無限小複素変形または Einstein 変形が存在するか、というものである。負の場合にはすべての無限小 Einstein 変形が二次までは延長できるため、複素側の二次障害だけでは Einstein 側の非可積分性は従わない。

著者は、Kuranishi 空間が非被約な標準偏極曲面 $S$ と、種数2の曲線 $B$ の大きな有限 étale 被覆 $C$ を用い、有限群 $G\cong(\mathbb Z/7)^4$ の自由対角作用による

$$
X=(S\times C)/G
$$

を考える。この商は滑らかで、$K_X$ は ample である。

## 主結果

### 主定理（Theorem 1.2）

滑らかな射影三次元多様体 $X$、類 $\alpha_X\in H^1(X,T_X)$、および $\operatorname{Ric}g=-g$ を満たす Kähler–Einstein 計量が存在し、$K_X$ は ample、かつ $X$ は正次元多様体の積ではない。さらに

$$
[\alpha_X,\alpha_X]\ne0\quad\text{in }H^2(X,T_X)
$$

であり、$\alpha_X$ は非可積分な無限小複素変形、その Koiso 対応像は三次 Einstein 次数で障害を受ける非可積分な無限小 Einstein 変形である。

より精密には、種数2の曲線 $B$ に対して

$$
H^1(X,T_X)=\mathbb C\alpha_X\oplus H^1(B,T_B)
$$

となり、$\lambda\alpha_X+\beta$ に対応する複素変形と Einstein 変形が可積分であることは $\lambda=0$ と同値である。したがって無限小 Einstein 変形空間は実8次元、可積分方向全体は実6次元部分空間である。

## 証明の見取り図

まず非被約 Kuranishi 空間をもつ曲面上の $G$ 不変類を、自由対角商へ降下させる。積の二因子から来る変形の Kodaira–Spencer 括弧は交差せず、曲線側の自己括弧も消えるため、$\lambda\alpha_X+\beta$ の障害は $\lambda^2[\alpha_X,\alpha_X]$ だけで測られる。

次に Aubin–Yau の存在・一意性で積計量を商へ降ろし、Koiso の同型で複素変形を Einstein 変形に移す。Nagy の三次 Einstein 方程式は、Einstein 変形が三次まで延長できれば一次 Kodaira–Spencer 障害が消えることを強制するので、$\alpha_X$ の非消滅と矛盾する。曲線側の方向は曲線の非障害性とパラメータ付き Aubin–Yau 定理により実際に積分される。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.13481](https://arxiv.org/abs/2608.13481)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Question 1.1, Theorem 1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
