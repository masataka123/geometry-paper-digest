---
layout: paper
title: "Frobenius integrability of certain $p$-forms on singular spaces"
title_ja: "特異空間上のあるp形式のFrobenius可積分性"
authors: "Junyan Cao, Andreas Höring"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Demailly proved that on a smooth compact Kähler manifold the distribution defined by a holomorphic $p$-form with values in an anti-pseudoeffective line bundle is always integrable. We generalise his result to compact Kähler spaces with klt singularities.
topic: algebraic-geometry
tags:
  - singularities
  - foliations
  - positivity
arxiv_id: "2210.02758v1"
arxiv_url: "https://arxiv.org/abs/2210.02758"
arxiv_submitted: "2022-10-06"
arxiv_updated: "2022-10-06"
summary: >-
  反擬有効な階数1反射層に値をとる反射的正則 $p$ 形式が定める分布について、滑らかなコンパクトKähler多様体上のDemaillyの可積分性定理をklt特異Kähler空間へ拡張する。特異点解消上の対数形式と特異Hermitian計量に対する部分積分を組み合わせ、lc空間上の1形式にも対応する結果を得る。
abstract_en: >-
  Demailly proved that on a smooth compact Kähler manifold the distribution defined by a holomorphic $p$-form with values in an anti-pseudoeffective line bundle is always integrable. We generalise his result to compact Kähler spaces with klt singularities.
summary_en: ""
abstract_ja: >-
  Demaillyは、滑らかなコンパクトKähler多様体上で反擬有効直線束に値をとる正則 $p$ 形式が定める分布は常に可積分であることを証明した。本論文はこの結果をklt特異点をもつコンパクトKähler空間へ一般化する。
abstract_source_url: "https://arxiv.org/abs/2210.02758"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "http://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2210.02758](https://arxiv.org/abs/2210.02758)
- **著者:** Junyan Cao, Andreas Höring
- **初回投稿日:** 2022年10月6日
- **最終更新日:** 2022年10月6日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかなコンパクトKähler多様体上の正則形式はKähler恒等式により閉形式になる。Demaillyはこれを、擬有効直線束 $L$ の双対に値をとる正則 $p$ 形式へ拡張し、その零収縮方向が可積分な分布を定めることを示した。

本論文は、この可積分性をklt特異点をもつ正規コンパクトKähler空間へ拡張する。係数はある反射冪が局所自由かつ擬有効となる階数1反射層であり、形式自身も反射的微分形式として扱われる。

特異点解消へ引き戻すと、反射形式は例外因子に沿う対数極をもち得るうえ、引き戻した層の飽和が擬有効とは限らない。そこで対数形式と特異Hermitian計量に対するDemailly型の部分積分を整備し、klt条件から必要な計量の特異性評価を得る。

さらに $p=1$ ではlc特異点まで結果を拡張する。一方、一般の対数 $p$ 形式に対する接続閉性は $p\geq2$ で未解決であり、論文は成立する二つの状況を示すにとどめる。

## 背景と問題設定

$(L,h)$ を半正曲率カレント $i\Theta_h(L)\geq0$ をもつ直線束とし、$u\in H^0(X,\Omega_X^p\otimes L^*)$ を考える。$i_\xi u=0$ を満たすベクトル場からなる飽和部分層 $S_u\subset T_X$ が分布を定める。滑らかな場合、Demaillyの定理は $D'_{h^*}u=0$ を示し、そこから $S_u$ のFrobenius可積分性と葉方向の曲率の平坦性が従う。

特異空間では、解消 $\pi:X\to Y$ の例外単純正規交差因子 $E$ に沿う対数極を制御する必要がある。IntroductionのQuestion 1.3は、任意の半正特異計量について $u\in H^0(X,\Omega_X^p(\log E)\otimes L^*)$ から $D'_{h^*}u=0$ が従うかを問う。

## 主結果

### klt空間上の可積分性（Theorem 1.2）

$Y$ をklt特異点をもつ正規コンパクトKähler空間とする。階数1反射層 $A$ のある反射冪 $A^{[m]}$ が局所自由かつ擬有効で、非零切断

$$
u\in H^0\!\left(Y,(\Omega_Y^p\otimes A^*)^{**}\right)
$$

があるとする。このとき、$i_\xi u=0$ で定まる飽和部分層 $S_u\subset T_Y$ は可積分であり、特異葉層を定める。

結論は滑らかな場合のDemaillyの定理をklt空間と反射的形式へ移すものである。解消上の対応する直線束については、葉方向の曲率の平坦性も得られる。

### lc空間上の1形式（Proposition 1.4）

$Y$ がlc特異点をもつ場合でも、$p=1$ なら同じ係数条件の下で $S_u$ は可積分になる。反射的1形式が解消へ延長するという既知結果が鍵であり、高次形式では対数極なしの延長が一般に失敗するため、そのままでは $p\geq2$ に拡張できない。

## 証明の見取り図

特異点解消 $\pi:X\to Y$ 上で反射形式を例外因子 $E$ に沿う対数形式として扱う。引き戻した係数層を対数微分形式の中で飽和し、その擬有効性を確保する。次にDemaillyの部分積分を、対数極と特異計量を許す形へ修正する。

Introductionが述べる技術的核心は、残差が非零の例外成分に沿う計量の重みを制御し、カットオフ関数による境界項を消すことである。これにより解消の補集合上で接続閉性を得て、Frobenius可積分性を元の特異空間へ降ろす。

## 原論文との対応

- **Abstractページ:** [arXiv:2210.02758](https://arxiv.org/abs/2210.02758)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Proposition 1.4
- **論文構成の説明:** Introduction末尾, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** Creative Commons Attribution 4.0 International
- **source_scope:** Abstract and Introduction
